import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createContributor } from 'apiSdk/contributors';
import { contributorValidationSchema } from 'validationSchema/contributors';
import { UserInterface } from 'interfaces/user';
import { ClientInterface } from 'interfaces/client';
import { getUsers } from 'apiSdk/users';
import { getClients } from 'apiSdk/clients';
import { ContributorInterface } from 'interfaces/contributor';

function ContributorCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: ContributorInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createContributor(values);
      resetForm();
      router.push('/contributors');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ContributorInterface>({
    initialValues: {
      last_contribution: new Date(new Date().toDateString()),
      total_contributions: 0,
      user_id: (router.query.user_id as string) ?? null,
      client_id: (router.query.client_id as string) ?? null,
    },
    validationSchema: contributorValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Contributors',
              link: '/contributors',
            },
            {
              label: 'Create Contributor',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Contributor
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="last_contribution" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Last Contribution
            </FormLabel>
            <DatePicker
              selected={formik.values?.last_contribution ? new Date(formik.values?.last_contribution) : null}
              onChange={(value: Date) => formik.setFieldValue('last_contribution', value)}
            />
          </FormControl>

          <NumberInput
            label="Total Contributions"
            formControlProps={{
              id: 'total_contributions',
              isInvalid: !!formik.errors?.total_contributions,
            }}
            name="total_contributions"
            error={formik.errors?.total_contributions}
            value={formik.values?.total_contributions}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('total_contributions', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<ClientInterface>
            formik={formik}
            name={'client_id'}
            label={'Select Client'}
            placeholder={'Select Client'}
            fetcher={getClients}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/contributors')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'contributor',
    operation: AccessOperationEnum.CREATE,
  }),
)(ContributorCreatePage);

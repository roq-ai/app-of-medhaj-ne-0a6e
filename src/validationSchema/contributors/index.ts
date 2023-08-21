import * as yup from 'yup';

export const contributorValidationSchema = yup.object().shape({
  last_contribution: yup.date().nullable(),
  total_contributions: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  client_id: yup.string().nullable().required(),
});

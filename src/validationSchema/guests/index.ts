import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required(),
  last_login: yup.date().nullable(),
  last_search: yup.string().nullable(),
  favorite_category_id: yup.string().nullable().required(),
});

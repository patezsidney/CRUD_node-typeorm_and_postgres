import * as yup from 'yup';

const updateUserShape = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  updatedOn: yup.date().default(() => new Date()),
  password: yup.string().min(4),
});

export default updateUserShape;

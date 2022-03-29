import * as yup from 'yup';
import { v4 } from 'uuid';
import bcrypt from 'bcrypt';

const createUserShape = yup.object().shape({
  uuid: yup.string().default(() => v4()),
  name: yup.string().required(),
  email: yup.string().email().required(),
  createdOn: yup.date().default(() => new Date()),
  updatedOn: yup.date().default(() => new Date()),
  isAdm: yup.boolean().required(),
  password: yup
    .string()
    .min(4)
    .required()
    .transform((str) => bcrypt.hashSync(str, 10)),
});

export default createUserShape;

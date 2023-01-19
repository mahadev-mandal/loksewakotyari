import * as yup from 'yup';

export const normalUserLoginSchema = yup.object().shape({
    username: yup.string().required().trim(),
    password: yup.string().required().trim(),
})
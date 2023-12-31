import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('First name required'),
  lastName: Yup.string().required('Last name required'),
  email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  password: Yup.string().required('Password is required'),
})

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  password: Yup.string().required('Password is required'),
})

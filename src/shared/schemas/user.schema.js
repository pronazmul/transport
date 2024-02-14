import { object, string, boolean, mixed, ref } from 'yup'
import { regexp } from './shared.regexp'

const { email, mobile, password, imageSize, image } = regexp

export const createUserSchema = object().shape({
  name: string().required('Name is Required!'),
  email: string()
    .matches(email, 'Invalid Email Address!')
    .required('Email is Required!'),
  mobile: string()
    .matches(mobile, 'Invalid Mobile Number!')
    .required('Mobile Number is Required!'),
  password: string()
    .matches(password, 'Invalid Password!')
    .required('Password Is Required!'),
})

export const loginSchema = object().shape({
  email: string()
    .matches(email, 'Invalid Email!')
    .required('Email is Required!'),
  password: string()
    .matches(password, 'Invalid Password!')
    .required('Password Is Required!'),
  remember: boolean(),
  // .required('The terms and conditions must be accepted.')
  // .oneOf([true], 'The terms and conditions must be accepted.'),
})

export const updateUserSchema = object().shape({
  name: string().optional(),
  mobile: string().optional().matches(mobile, 'Invalid Mobile Number!'),
  email: string().optional().matches(email, 'Invalid Email Address!'),
})

export const updateAvatarSchema = object().shape({
  avatar: mixed()
    .test(
      'fileSize',
      'File more than 1 MB not Allowed',
      (value) => value && value.size <= imageSize
    )
    .test(
      'fileFormat',
      'Unsupported Image Format!',
      (value) => value && image.includes(value.type)
    ),
})

export const updatePasswordSchema = object().shape({
  currentPassword: string()
    .required('Old Password is Required!')
    .matches(password, 'Invalid Password!')
    .min(8, 'Invalid Password!')
    .max(50, 'Invalid Password!'),
  newPassword: string()
    .required('New Password is Required!')
    .notOneOf([ref('currentPassword')], 'Nothing to change!')
    .matches(password, 'Uppercase Lowercase Special char Required')
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
  confirmPassword: string()
    .required('Confirm Password is Required!')
    .when('newPassword', (password, field) =>
      password ? field.required() : field
    )
    .oneOf([ref('newPassword')], 'Password does not matched'),
})

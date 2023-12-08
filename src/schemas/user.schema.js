import { object, string, date, ref, array, number } from 'yup'
import GlobalConst from '../consts/global.const.js'

const { emailExp, passwordExp } = GlobalConst.regexp

// Initialize Module
const UserSchema = {}
UserSchema.login = object()
  .shape({
    email: string()
      .matches(emailExp, 'Invalid Email')
      .required('Email is Required!'),
    password: string()
      .matches(passwordExp, 'Invalid Password')
      .required('Password Is Required!'),
  })
  .strict()
  .noUnknown()

UserSchema.create = object()
  .shape({
    firstName: string().required('FirstName is Required!'),
    lastName: string().required('LastName is Required!'),
    brith: string().optional(),
    email: string()
      .matches(emailExp, 'Invalid Email Address!')
      .required('Email is Required!'),
    password: string()
      .matches(
        passwordExp,
        'Password must be at least 8 characters long and contain letters, numbers, and special characters!'
      )
      .required('Password Is Required!'),
  })
  .strict()

UserSchema.update = object()
  .shape({
    firstName: string().optional(),
    lastName: string().optional(),
    email: string().optional().matches(emailExp, 'Invalid Email Address!'),
    password: string()
      .optional()
      .matches(
        passwordExp,
        'Password must be at least 8 characters long and contain letters, numbers, and special characters!'
      ),
    brith: string().optional(),
  })
  .strict()
export default UserSchema

import { object, string, ref } from 'yup'
import GlobalConst from '../consts/global.const.js'
import UserConst from '../consts/user.const.js'

const { emailExp, passwordExp, alphabetExp, numberExp } = GlobalConst.regexp

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
    name: string()
      .matches(alphabetExp, 'Name should be alplabet only!')
      .required('Name is Required!'),
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
  .noUnknown()

UserSchema.update = object()
  .shape({
    name: string()
      .optional()
      .matches(alphabetExp, 'Name should be alplabet only!'),
    email: string().optional().typeError('Email should Be String!'),
  })
  .strict()
  .noUnknown()

UserSchema.updatePassword = object()
  .shape({
    currentPassword: string()
      .required('Old Password is Required!')
      .matches(passwordExp, 'Invalid Password!')
      .min(8, 'Invalid Password!')
      .max(50, 'Invalid Password!'),
    newPassword: string()
      .required('New Password is Required!')
      .notOneOf([ref('currentPassword')], 'Nothing to change!')
      .matches(passwordExp, 'Uppercase Lowercase Special char Required')
      .min(8, 'Password Should be minimum 8 character')
      .max(50, 'Too long'),
    confirmPassword: string()
      .required('Confirm Password is Required!')
      .when('newPassword', (password, field) =>
        password ? field.required() : field
      )
      .oneOf([ref('newPassword')], 'Password does not matched'),
  })
  .strict()
  .noUnknown()

UserSchema.fetchAllUser = object()
  .shape({
    search: string().typeError('Search Value Should Be String'),
    page: string().optional().matches(numberExp, 'Invalid Page'),
    limit: string().optional().matches(numberExp, 'Invalid limit'),
    sortBy: string()
      .optional()
      .oneOf(UserConst.sortOptions, 'Invalid sortBy value'),
    sortOrder: string()
      .optional()
      .oneOf(['asc', 'desc'], 'Invalid sortOrder value'),
  })
  .strict()
  .noUnknown()

export default UserSchema

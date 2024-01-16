import { object, string } from 'yup'
import GlobalConst from '../consts/global.const.js'
import UserConst from './../consts/user.const.js'

const { emailExp, passwordExp, numberExp } = GlobalConst.regexp

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
    name: string().required('Name is Required!'),
    email: string()
      .matches(emailExp, 'Invalid Email Address!')
      .required('Email is Required!'),
    password: string()
      .matches(
        passwordExp,
        'Password must be at least 8 characters long and contain letters, numbers, and special characters!'
      )
      .required('Password Is Required!'),
    city: string().optional(),
    country: string().optional(),
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
  })
  .strict()

UserSchema.find = object()
  .shape({
    search: string().typeError('Search Value Should be String!'),
    page: string().optional().matches(numberExp, 'Invalid Page!'),
    limit: string().optional().matches(numberExp, 'Invalid Limit!'),
    sortOrder: string()
      .optional()
      .oneOf(['asc', 'desc'], 'Invalid sortOrder Value!'),
    sortBy: string()
      .optional()
      .oneOf(UserConst.sortOptions, 'Invalid SortBy Value!'),

    // filter Options
    active: string()
      .optional()
      .oneOf(['true', 'false'], 'Invalid Active Value'),
  })
  .strict()
  .noUnknown()

export default UserSchema

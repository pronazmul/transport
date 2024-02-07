import { array, number, object, string } from 'yup'
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

UserSchema.create = object()
  .shape({
    name: string().required('Name is Required!'),
    email: string().optional().matches(emailExp, 'Invalid Email'),
    password: string().optional().matches(passwordExp, 'Invalid Password'),
    type: string()
      .oneOf(UserConst.registerAllowedType)
      .default(UserConst.defaultType),
    location: object()
      .shape({
        name: string(),
        type: string().oneOf(['Point']).default('Point'),
        coordinates: array().of(number()).default([0, 0]),
      })
      .optional(),
  })
  .strict()
  .noUnknown()

UserSchema.update = object()
  .shape({
    name: string().optional(),
    email: string().optional().matches(emailExp, 'Invalid Email'),
    password: string().optional().matches(passwordExp, 'Invalid Password'),
    type: string().optional().oneOf(UserConst.registerAllowedType),
    location: object()
      .shape({
        name: string(),
        type: string().oneOf(['Point']).default('Point'),
        coordinates: array().of(number()).default([0, 0]),
      })
      .optional(),
  })
  .strict()
  .noUnknown()

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
    type: string().optional().oneOf(UserConst.userType, 'Invalid User Type'),
    active: string()
      .optional()
      .oneOf(['true', 'false'], 'Invalid Active Value'),
  })
  .strict()
  .noUnknown()

export default UserSchema

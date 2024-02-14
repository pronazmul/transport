import { object, string } from 'yup'
import GlobalConst from '../consts/global.const.js'
import FollowerConst from '../consts/follower.const.js'

const { emailExp, passwordExp, numberExp } = GlobalConst.regexp

// Initialize Module
const FollowerSchema = {}

FollowerSchema.create = object()
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

FollowerSchema.find = object()
  .shape({
    search: string().typeError('Search Value Should be String!'),
    page: string().optional().matches(numberExp, 'Invalid Page!'),
    limit: string().optional().matches(numberExp, 'Invalid Limit!'),
    sortOrder: string()
      .optional()
      .oneOf(['asc', 'desc'], 'Invalid sortOrder Value!'),
    sortBy: string()
      .optional()
      .oneOf(FollowerConst.sortOptions, 'Invalid SortBy Value!'),

    // filter Options
    user: string().required('UserId is required'),
    active: string()
      .optional()
      .oneOf(['true', 'false'], 'Invalid Active Value'),
    type: string()
      .optional()
      .oneOf(['follower', 'following'], 'Invalid Type Value'),
  })
  .strict()
  .noUnknown()

export default FollowerSchema

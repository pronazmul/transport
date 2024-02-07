import { array, number, object, string } from 'yup'
import GlobalConst from '../consts/global.const.js'
import FeedConst from '../consts/feed.const.js'

const { numberExp } = GlobalConst.regexp

// Initialize Module
const FeedSchema = {}

FeedSchema.create = object()
  .shape({
    creator: string().required('CreatorID is Required!'),
    title: string().required('Feed Title is Required'),
    description: string().required('Feed Description is Required'),
    place: string().optional(),
    link: string().optional(),
    // location: object()
    //   .shape({
    //     name: string(),
    //     type: string().oneOf(['Point']).default('Point'),
    //     coordinates: array().of(number()).default([0, 0]),
    //   })
    //   .optional(),
  })
  .strict()
  .noUnknown()

FeedSchema.update = object()
  .shape({
    title: string().optional(),
    description: string().optional(),
    place: string().optional(),
    link: string().optional(),
    // location: object()
    //   .shape({
    //     name: string(),
    //     type: string().oneOf(['Point']).default('Point'),
    //     coordinates: array().of(number()).default([0, 0]),
    //   })
    //   .optional(),
  })
  .strict()
  .noUnknown()

FeedSchema.find = object()
  .shape({
    search: string().typeError('Search Value Should be String!'),
    page: string().optional().matches(numberExp, 'Invalid Page!'),
    limit: string().optional().matches(numberExp, 'Invalid Limit!'),
    sortOrder: string()
      .optional()
      .oneOf(['asc', 'desc'], 'Invalid sortOrder Value!'),
    sortBy: string()
      .optional()
      .oneOf(FeedConst.sortOptions, 'Invalid SortBy Value!'),

    // filter Options
    user: string().optional(),
    place: string().optional(),
    active: string()
      .optional()
      .oneOf(['true', 'false'], 'Invalid Active Value'),
  })
  .strict()
  .noUnknown()

export default FeedSchema

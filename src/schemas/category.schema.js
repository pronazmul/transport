import { number, object, string } from 'yup'
import GlobalConst from '../consts/global.const.js'
import CategoryConst from './../consts/category.const.js'

const { numberExp } = GlobalConst.regexp

// Initialize Module
const CategorySchema = {}

CategorySchema.create = object()
  .shape({
    name: string().required('Category Name is Required!'),
    code: number().required('Category Code is Required!'),
  })
  .strict()
  .noUnknown()

CategorySchema.update = object()
  .shape({
    name: string().optional(),
    code: number().optional(),
    active: string()
      .optional()
      .oneOf(['true', 'false'], 'Invalid Active Value'),
  })
  .strict()
  .noUnknown()

CategorySchema.find = object()
  .shape({
    search: string().typeError('Search Value Should be String!'),
    page: string().optional().matches(numberExp, 'Invalid Page!'),
    limit: string().optional().matches(numberExp, 'Invalid Limit!'),
    sortOrder: string()
      .optional()
      .oneOf(['asc', 'desc'], 'Invalid sortOrder Value!'),
    sortBy: string()
      .optional()
      .oneOf(CategoryConst.sortOptions, 'Invalid SortBy Value!'),

    // filter Options
    active: string()
      .optional()
      .oneOf(['true', 'false'], 'Invalid Active Value'),
  })
  .strict()
  .noUnknown()

export default CategorySchema

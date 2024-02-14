const QueryParamUtils = {}

/**
 * Crate URL with Query Params from Object
 * @param {string} - Rquest URL
 * @param {object} [query={ radius: 5000, categories: 13000, limit:20}] - Key Value Pair Like Object
 * @returns {string} - http://abcd.com?radius=5000&categories=13000&limit=20
 */
QueryParamUtils.createQueryParamsWithUrl = (url = '', query = {}) => {
  let queryParams = Object.entries(query)
    .map((i) => i.join('='))
    .join('&')

  return `${url}?${queryParams}`
}

/**
 * Crate Query Params From Object
 * @param {object} [query={ radius: null, categories: 13000, limit:20}]
 * @returns {string} - categories=13000&limit=20
 */
QueryParamUtils.createQueryParams = (query = {}) => {
  return Object.entries(query)
    .filter(([k, v]) => Boolean(v))
    .map((i) => i.join('='))
    .join('&')
}

export default QueryParamUtils

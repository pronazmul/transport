const DebounceUtils = {}

/**
 *
 * @param {Function} callback
 * @param {Number} delay in milisecond
 * @returns {Function} Call the callback function after delay
 */
DebounceUtils.debounce = (callback, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

export default DebounceUtils

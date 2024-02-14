// Initiazlize Object
const ArrayUtils = {}

/**
@desc Returns a random element from an array.
@param {Array} array - The array to choose a random element from.
@returns {*} The randomly selected element from the array.
*/
ArrayUtils.randomSingle = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

/**
@desc Returns an array of randomly selected elements from the given array.
@param {Array} array - The array to choose elements from.
@param {number} [count] - The number of elements to return. If not specified, a random number of elements will be returned.
@returns {Array} An array containing the randomly selected elements.
*/
ArrayUtils.randomMultiple = (array, count) => {
  const shuffledList = array.sort(() => Math.random() - 0.5)
  const newArraySize = Math.floor(Math.random() * array.length)
  return shuffledList.slice(0, count ? count : newArraySize)
}

export default ArrayUtils

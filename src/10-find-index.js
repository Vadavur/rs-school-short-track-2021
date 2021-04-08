/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let index = Math.ceil(array.length / 2);
  let downIndex = 0;
  let upIndex = array.length - 1;
  while (array[index] !== value) {
    if (array[index] < value) {
      downIndex = index + 1;
    } else upIndex = index - 1;
    index = Math.ceil((downIndex + upIndex) / 2);
  }
  return index;
}

module.exports = findIndex;

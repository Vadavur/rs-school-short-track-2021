/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const matrixLengthY = matrix.length;
  const matrixLengthX = matrix[0].length;
  let sum = 0;

  // get the sum of the first line elements, cause there are no zeroes above them for sure
  sum = matrix[0].reduce((a, b) => a + b, 0);

  // add no_zero_above elements to the sum, starting from the second line
  for (let i = 0; i < matrixLengthX; i++) {
    for (let j = 1; j < matrixLengthY; j++) {
      if (matrix[j - 1][i] !== 0) {
        sum += matrix[j][i];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const xLength = matrix[0].length;
  const yLength = matrix.length;

  // create a new array with the same structure as the matrix has,
  // but with each matrix element being set to zero
  const field = matrix.map((item) => item.map(() => 0));

  // increments every cell value, which surrounds the matrix cell with passed indexes
  function setDangers(i, j) {
    for (let a = i - 1; a <= i + 1; a++) {
      for (let b = j - 1; b <= j + 1; b++) {
        if (this[a] !== undefined && this[a][b] !== undefined) {
          this[a][b]++;
        }
      }
    }
    this[i][j]--;
  }

  // pass the function as a method to the field matrix
  field.setMinesAround = setDangers;

  // set numbers of mines round each one mine cell in the matrix
  for (let i = 0; i < yLength; i++) {
    for (let j = 0; j < xLength; j++) {
      if (matrix[i][j] === true) {
        field.setMinesAround(i, j);
      }
    }
  }

  // remove the method from the field matrix
  delete field.setMinesAround;

  return field;
}

module.exports = minesweeper;

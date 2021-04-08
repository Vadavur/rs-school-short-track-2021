/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = String(n).split('');
  const numLength = num.length;

  for (let i = 0; i < numLength; i++) {
    if (num[i] < num[i + 1]) {
      num[i] = '';
      break;
    }
  }

  num = num.join('');

  if (num.length === numLength) num = num.slice(0, -1);

  return parseInt(num, 10);
}

module.exports = deleteDigit;

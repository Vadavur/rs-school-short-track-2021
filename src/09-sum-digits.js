/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num = String(n).split('');
  num = num.reduce((sum, i) => sum + parseInt(i, 10), 0);
  if (String(num).length === 1) return num;
  return getSumOfDigits(num);
}

module.exports = getSumOfDigits;

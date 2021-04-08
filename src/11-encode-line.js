/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const letters = str.split('');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i + 1]) {
      if (typeof letters[i - 1] !== 'number') {
        letters[i] = 2;
      } else {
        letters[i] = letters[i - 1] + 1;
        letters[i - 1] = '';
      }
    }
  }
  return letters.join('');
}

module.exports = encodeLine;

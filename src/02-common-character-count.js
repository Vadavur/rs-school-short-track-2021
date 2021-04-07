/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');

  const s1Length = s1Arr.length;
  let counter = 0;

  while (s2Arr.length !== 0) {
    const currentChar = s2Arr.pop();
    for (let i = 0; i < s1Length; i++) {
      if (s1Arr[i] === currentChar) {
        s1Arr[i] = '';
        counter++;
        break;
      }
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsArr = domains.map((item) => item.split('.').reverse());
  const domainsMap = new Map();

  domainsArr.forEach((element) => {
    const domain = element;
    while (domain[0] !== undefined) {
      const domainName = `.${domain.join('.')}`;
      if (domainsMap.has(domainName)) {
        const sameDomainCounter = domainsMap.get(domainName);
        domainsMap.set(domainName, sameDomainCounter + 1);
      } else {
        domainsMap.set(domainName, 1);
      }
      domain.pop();
    }
  });

  return Object.fromEntries(domainsMap);
}

module.exports = getDNSStats;

const { NotImplementedError } = require('../extensions/index.js');

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

 const getDNSStats = arr => {
	return arr.reduce((acc, item) => {
		const arrDomain = item.split('.').reverse();
		let tempDNS = '';
		arrDomain.forEach(elDNS => {
			tempDNS += `.${elDNS}`;
			acc[tempDNS] ? acc[tempDNS]++ : acc[tempDNS] = 1;
		})

		return acc;
	}, {});
};

module.exports = {
  getDNSStats
};

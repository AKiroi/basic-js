const { NotImplementedError } = require('../extensions/index.js');

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

 const encodeLine = str => {
	return str.split('').reduce((acc, item, i, arr) => {
		if (arr[i] === arr[i + 1]) {
			acc[1]++;
		} else {
			if (acc[1] !== 1) {
				acc[0] += acc[1];
				acc[1] = 1;
				acc[0] += item;
			} else {
				acc[0] += item;
			}
		}
		 return acc;
	}, ['', 1])[0];
}

module.exports = {
  encodeLine
};

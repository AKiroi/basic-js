const { NotImplementedError } = require('../extensions/index.js');

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

 const getCommonCharacterCount = (s1, s2) => {
	let arrS2 = [...s2];
	return [...s1].reduce((acc, item) => {
		let index = arrS2.findIndex((letter) => letter === item);
		if (index >= 0) {
			acc += 1;
			arrS2.splice(index, 1);
		}
		return acc;
	}, 0);
};

module.exports = {
  getCommonCharacterCount
};

const { NotImplementedError } = require('../extensions/index.js');

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

 const deleteDigit = n => {
	const arr = n.toString().split('');
	const res = arr.map((_, i) => {
		 let newArr = [...arr];
		 newArr.splice(i, 1);
		 return +newArr.join('');
	})

	return Math.max(...res);
}

module.exports = {
  deleteDigit
};

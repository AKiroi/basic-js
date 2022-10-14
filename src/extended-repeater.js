const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 const repeater = (str, options) => {
	const {
		repeatTimes = 1,
		separator = '+',
		addition = '',
		additionRepeatTimes = 1,
		additionSeparator = '|',
	} = options;

	let res = '';

	let additionPeace = `${addition}${additionSeparator}`.repeat(additionRepeatTimes);
	additionPeace = additionPeace.substring(0, additionPeace.length - additionSeparator.length);

	for (let i = 0; i < repeatTimes; i++) {
		res += str + additionPeace;
		if (i + 1 < repeatTimes) {
			res += separator;
	  }
	}

	return res;
};

module.exports = {
  repeater
};

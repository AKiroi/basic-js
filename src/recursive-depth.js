const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

 class DepthCalculator {
	calculateDepth(arr) {
		const depthes = arr.map((item) => (!Array.isArray(item) ? 1 : this.calculateDepth(item) + 1));
		return !arr.length ? 1 : Math.max(...depthes);
	}
}

module.exports = {
  DepthCalculator
};

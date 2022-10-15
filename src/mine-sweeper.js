const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

 const minesweeper = matrix => {
	const neighbours = [
		[1, -1],
		[1, 0],
		[1, 1],
		[0, -1],
		[0, 1],
		[-1, -1],
		[-1, 0],
		[-1, 1]
	];

	const resMatrix = matrix.map((row) => row.map((_) => 0));

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			for (let k = 0; k < neighbours.length; k++) {
				let x = neighbours[k][0] + i;
				let y = neighbours[k][1] + j;
				if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length) {
					if (matrix[x][y]) {
						resMatrix[i][j]++;
					}
				}
			}
		}
	}
	return resMatrix;
}

module.exports = {
  minesweeper
};

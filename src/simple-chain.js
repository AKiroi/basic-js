const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const arrOfChain = [];

 const chainMaker = {
	 getLength() {
		 return +arrOfChain.length;
	 },
	 addLink(value) {
		 if (value !== undefined ) {
			 arrOfChain.push(value);
		 } else {
			 arrOfChain.push(' ');
		 }
		 return this;
	 },
	 removeLink(position) {
		 if (Number.isNaN(position - 1) || position - 1 > arrOfChain.length - 1 || position - 1 < 0) {
			 arrOfChain.length = 0;
			 throw new Error(`You can't remove incorrect link!`);
		 } else {
			 arrOfChain.splice(position - 1, 1);
		 }
		 return this;
	 },
	 reverseChain() {
		 arrOfChain.reverse();
 
		 return this;
	 },
	 finishChain() {
		 const res = arrOfChain.reduce((acc, item, i) => {
			 if (i === arrOfChain.length - 1) {
				 acc += `( ${item} )`;
			 } else {
				 acc += `( ${item} )~~`;
			 }
			 return acc;
		 }, '');
 
		 arrOfChain.length = 0;
 
		 return res;
	 },
 };

module.exports = {
  chainMaker
};

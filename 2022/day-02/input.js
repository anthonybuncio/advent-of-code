const path = require('path');
const fs = require('fs');

const shapes = {
	A: 1,
	X: 1,
	B: 2,
	Y: 2,
	C: 3,
	Z: 3,
};

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.split('\n')
	.map((v) => v.split(' '));

module.exports = {
  input,
  shapes
}
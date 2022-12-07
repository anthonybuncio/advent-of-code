const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .split('\n\n');
    
const sortedSum = input
  .map((elf) => {
    return elf
      .split("\n")
      .map((cals) => parseInt(cals, 10))
      .reduce((sum, num) => sum + num, 0)
  })
  .sort((a, z) => z - a);

const topThree = sortedSum.slice(0, 3).reduce((sum, v) => sum + v, 0)

console.log('Part One: ', sortedSum[0])
console.log('Part Two: ', topThree);

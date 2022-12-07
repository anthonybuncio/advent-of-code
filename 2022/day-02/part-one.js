const {input, shapes} = require('./input')

const rounds = input.map(([left_shape, right_shape]) => {
  const left = shapes[left_shape];
  const right = shapes[right_shape];
  const diff = Math.abs(left - right);

  if (left === right) {
    // Draw
    return right + 3;
  } else if ((diff === 1 && right > left) || (right === 1 && left === 3)) {
    // Win
    return right + 6;
  } else {
    // Lose
    return right;
  }
});

console.log(rounds.reduce((a, b) => a + b, 0));
const numbers = [2, -5, 0, 7, -3, 0, 10, -8, 12, -31, 1, 8];
positiveCount = 0;
negativeCount = 0;
zeroCount = 0;

for (const number of numbers) {
  if (number > 0) {
    positiveCount++;
  } else if (number === 0) {
    zeroCount++;
  } else {
    negativeCount++;
  }
}

console.log('Count of positive numbers: ' + positiveCount);
console.log('Count of negative numbers: ' + negativeCount);
console.log('Count of zeroes: ' + zeroCount);

function calculate(operations) {
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return operations.reduce((acc, item) => operators[item.operation](acc, item.value), 0);
}

const operations = [
  { operation: '+', value: 10 },
  { operation: '-', value: 3 },
  { operation: '+', value: 5 },
  { operation: '*', value: 2 },
  { operation: '-', value: 7 },
];

console.log(calculate(operations));

function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('You can not divide by zero');
  } else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('You can use only numbers for dividing');
  }
  return numerator / denominator;
}

try {
  console.log(divide(16, 4));
} catch (e) {
  console.log('Error was triggered!', e.message);
} finally {
  console.log('The work is done!');
}

try {
  console.log(divide(5, 0));
} catch (e) {
  console.log('Error was triggered!', e.message);
} finally {
  console.log('The work is done!');
}

try {
  console.log(divide('123', 5));
} catch (e) {
  console.log('Error was triggered!', e.message);
} finally {
  console.log('The work is done!');
}

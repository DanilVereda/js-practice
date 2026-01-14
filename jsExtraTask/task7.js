function countDivisors(number) {
  let counter = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      counter++;
    }
  }
  return counter;
}

console.log(countDivisors(7848));

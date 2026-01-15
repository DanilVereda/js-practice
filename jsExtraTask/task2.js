function averageMark(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let average = sum / marks.length;

  if (average < 3) {
    return `Failed. Your average mark is ${average.toFixed(2)}`;
  } else if (average >= 3 && average <= 4) {
    return `Passed. Your average mark is ${average.toFixed(2)}`;
  } else {
    return `Excellent. Your average mark is ${average.toFixed(2)}`;
  }
}

console.log(averageMark([3, 3, 4, 5, 5, 5, 5, 5, 5]));

function handleNum(number, isEven, isUnEven) {
  if (number % 2 === 0) {
    isEven();
  } else {
    isUnEven();
  }
}

function handleEven() {
  console.log('Number is even');
}

function handleOdd() {
  console.log('Number is odd');
}

handleNum(4, handleEven, handleOdd);

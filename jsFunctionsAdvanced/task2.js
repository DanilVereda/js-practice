function recursion(num) {
  if (num >= 0) {
    console.log(num);
    num--;
    recursion(num);
  } else {
    console.log('Recursion is end');
  }
}

recursion(7);

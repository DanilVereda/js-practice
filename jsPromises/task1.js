function printWithTimer(text, sec) {
  setTimeout(function () {
    console.log(text);
  }, sec * 1000);
}

printWithTimer('This text was printed with delay', 5);

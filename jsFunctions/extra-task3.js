function rentalCar(d) {
  let price = 40;
  let sum = 0;
  if (d >= 3 && d < 7) {
    return (sum = price * d - 20);
  } else if (d >= 7) {
    return (sum = price * d - 50);
  } else {
    return (sum = price * d);
  }
}

console.log(rentalCar(8));

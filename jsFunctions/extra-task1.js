function ShortLongShort(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  } else if (a.length === b.length) {
    return 'The strings should not be the same length';
  } else {
    return a + b + a;
  }
}

console.log(ShortLongShort('44', '555'));

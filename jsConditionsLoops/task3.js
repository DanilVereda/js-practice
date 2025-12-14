let number = 4;

// Using 'for' construction

console.log('For loop');
for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(`${number} * ${i} = ${result}`);
}

// Using 'while' construction

console.log('While loop');
let i = 1;
while (i <= 10) {
  let result = number * i;
  console.log(`${number} * ${i} = ${result}`);
  i++;
}

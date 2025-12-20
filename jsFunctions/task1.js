// Function declaration

function square(width, height) {
  return width * height;
}

console.log(square(5, 10));

// Function expression

const result = function square1(width, height) {
  return width * height;
};

console.log(result(5, 10));

// Arrow function

const result1 = (width, height) => width * height;

console.log(result1(5, 10));

const person = {
  firstName: 'John',
  lastName: 'Cina',
  age: 42,
};

console.log(person);
person.email = 'test@gmail.com';
console.log(person);
delete person.age;
console.log(person);

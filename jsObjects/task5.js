const users = [
  {
    firstName: 'Den',
    lastName: 'Pod',
    age: 32,
    email: 'test1@gmail.com',
  },
  {
    firstName: 'Mer',
    lastName: 'Red',
    age: 21,
    email: 'test2@gmail.com',
  },
  {
    firstName: 'Sick',
    lastName: 'Sol',
    age: 57,
    email: 'test3@gmail.com',
  },
  {
    firstName: 'Rock',
    lastName: 'Dwain',
    age: 45,
    email: 'test4@gmail.com',
  },
];

for (const { firstName, lastName, age, email } of users) {
  console.log(
    `Hi, I am ${firstName} ${lastName}. I am ${age} years old. You can contact with me by this email - ${email}`,
  );
}

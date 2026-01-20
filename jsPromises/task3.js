async function getTodosById(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const json = await response.json();
  console.log(json);
}

async function getUsersById(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const json = await response.json();
  console.log(json);
}

getTodosById(1);
getUsersById(2);

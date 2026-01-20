function getTodosById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

function getUsersById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
}

getTodosById(1)
  .then((response) => response.json())
  .then((json) => {
    console.log('Todos info:');
    console.log(`UserId: ${json.userId}`);
    console.log(`Id: ${json.id}`);
    console.log(`Title: ${json.title}`);
    console.log(`Completed: ${json.completed}`);
  });

getUsersById(2)
  .then((response) => response.json())
  .then((json) => {
    console.log('User info:');
    console.log(`Id: ${json.id}`);
    console.log(`Name: ${json.name}`);
    console.log(`Username: ${json.username}`);
    console.log(`Email: ${json.email}`);
    console.log(`Address: 
        Street: ${json.address.street}
        Suite: ${json.address.suite}
        City: ${json.address.city}
        Zipcode: ${json.address.zipcode}
        Geo:
            Lat: ${json.address.geo.lat}
            Lng: ${json.address.geo.lng}`);
    console.log(`Phone: ${json.phone}`);
    console.log(`Website: ${json.website}`);
    console.log(`Company: 
        Name: ${json.company.name}
        CatchPhrase: ${json.company.catchPhrase}
        BS: ${json.company.bs}`);
  });

const checkPromiseRace = Promise.race([getTodosById(3), getUsersById(4)])
  .then((x) => console.log('Fulfilled (Promise.race): ', x))
  .catch((x) => console.log('Rejected (Promise.race): ', x));

const checkPromiseAll = Promise.all([getTodosById(5), getUsersById(6)])
  .then((x) => console.log('Fulfilled (Promise.all): ', x))
  .catch((x) => console.log('Rejected (Promise.all): ', x));

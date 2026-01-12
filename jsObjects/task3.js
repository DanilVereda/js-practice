const car1 = {
  brand: 'Audi',
  model: 'RS6',
  year: 2024,
};

const car2 = {
  brand: 'Tesla',
  model: 'Model S Plaid',
  owner: 'Ilon Mask',
};

const car3 = { ...car1, ...car2 };

console.log(car3);

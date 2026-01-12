function validatePassword(password, repeatPassword) {
  if (password !== repeatPassword) {
    return 'Passwords do not match';
  } else if (password.length < 8) {
    return 'Password too short';
  } else if (password.match(/\d/) === null) {
    return 'Password must contain a number';
  } else if (password.match(/[a-zA-Z]+/g) === null) {
    return 'Password must contain a letter';
  } else {
    return 'Password is valid';
  }
}

console.log(validatePassword('12345678q', '12345678q'));

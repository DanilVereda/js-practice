export class Book {
  constructor(name, author, year) {
    this._name = name;
    this._author = author;
    this._year = year;
  }

  set name(value) {
    if (value.length === 0) {
      console.log('The name of book cannot be empty');
      return;
    } else if (value.length < 3) {
      console.log('The name of book cannot be less than 3 characters');
      return;
    } else if (value.length > 200) {
      console.log('The name of book cannot be more than 200 characters');
      return;
    }
    this._name = value;
  }

  set author(value) {
    if (value.length === 0) {
      console.log('The author of book cannot be empty');
      return;
    } else if (value.length < 3) {
      console.log('The author of book cannot be less than 3 characters');
      return;
    } else if (value.length > 100) {
      console.log('The author of book cannot be more than 100 characters');
      return;
    }
    this._author = value;
  }

  set year(value) {
    if (value.length === 0) {
      console.log('The year of book cannot be empty');
      return;
    } else if (value <= 0) {
      console.log('The year of book cannot be less than 0');
      return;
    } else if (value > 2027) {
      console.log('The year of book cannot be more than 2026');
      return;
    }
    this._year = value;
  }

  static oldBook(books) {
    let oldestBook = null;
    for (const { _name, _author, _year } of books) {
      if (oldestBook === null) {
        oldestBook = { _name, _author, _year };
      } else if (_year < oldestBook._year) {
        oldestBook = { _name, _author, _year };
      }
    }
    return oldestBook;
  }

  printInfo() {
    console.log(`The name of book - ${this._name}`);
    console.log(`The author of book - ${this._author}`);
    console.log(`The year of book - ${this._year}`);
  }
}

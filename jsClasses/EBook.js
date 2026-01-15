import { Book } from './Book.js';

export class EBook extends Book {
  constructor(name, author, year, format) {
    super(name, author, year);
    this._format = format;
  }

  set format(value) {
    if (value.length === 0) {
      console.log('The format of book cannot be empty');
      return;
    } else if (value.length < 2) {
      console.log('The format of book cannot be less than 2 characters');
      return;
    } else if (value.length > 20) {
      console.log('The format of book cannot be more than 20 characters');
      return;
    }
    this._format = value;
  }

  static convertToEbook(book, format) {
    book.format = format;
    return book;
  }

  printInfo() {
    console.log(`The name of book - ${this._name}`);
    console.log(`The author of book - ${this._author}`);
    console.log(`The year of book - ${this._year}`);
    console.log(`The format of book - ${this._format}`);
  }
}

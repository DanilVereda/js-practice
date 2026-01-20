import { Book } from './Book.js';
import { EBook } from './EBook.js';

const lotr = new Book('The Lord of the Rings', 'J.R.R.Tolkien', 1954);
const harryPotter = new Book('Harry Potter and The chamber of secrets', 'J.K.Rowling', 1998);
const treasureIsland = new Book('Treasure Island', 'R.L.Stevenson', 1883);

// lotr.printInfo();
// harryPotter.printInfo();
// treasureIsland.printInfo();

const book_1984 = new EBook("'1984'", 'George Orwell', 1949, 'pdf');
const orientExpress = new EBook('Murder on the Orient Express', 'Agatha Christie', 1934, 'docx');

// book_1984.printInfo();
// orientExpress.printInfo();

harryPotter.name = '';
harryPotter.author = 'Q';
harryPotter.year = -1;

const books = [book_1984, orientExpress, lotr, treasureIsland];

console.log(Book.oldBook(books));

console.log(EBook.convertToEbook(lotr, 'pdf'));

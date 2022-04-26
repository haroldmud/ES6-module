/* eslint-disable linebreak-style */
import Books from './modules/AddClass.js';
import DateAndTime from './modules/DateFunction.js';

const bookModule = new Books();
const titleParent = document.querySelector('.books_warn');
bookModule;
DateAndTime();

document.addEventListener('DOMContentLoaded', () => {
  Books.contentInUi();
  Books.addBooks();
  Books.bookDeleting();
  Books.contactSection();
  Books.listSection();
  titleParent.style.display = 'block';
});

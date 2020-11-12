const myLibrary = [];
const title = document.getElementById('bookTitle');
const author = document.getElementById('authorName');
const pages = document.getElementById('pageNum');

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function displayForm() {
  const formContainer = document.getElementById('formContainer');
  if (window.getComputedStyle(formContainer).display === 'none') {
    formContainer.style.display = 'block';
  } else {
    formContainer.style.display = 'none';
  }
  displayButton();
}

function getBookDetails() {
  const newBook = new Book(title.value, author.value, pages.value);
  addBookToLibrary(newBook);
  displayForm();
  title.value = '';
  author.value = '';
  pages.value = '';
}
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  renderPage();
}

function displayButton() {
  const button = document.getElementById('showForm');
  if (window.getComputedStyle(button).display === 'none') {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

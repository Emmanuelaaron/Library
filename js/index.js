const myLibrary = [];
const title = document.getElementById('bookTitle');
const author = document.getElementById('authorName');
const pages = document.getElementById('pageNum');
const readStatus = document.getElementById('readStatus')

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus
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
  const newBook = new Book(title.value, author.value, pages.value, readStatus.checked == true);
  addBookToLibrary(newBook);
  displayForm();
  title.value = '';
  author.value = '';
  pages.value = '';
  readStatus.checked = false
}
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  renderBook();
}

function displayButton() {
  const button = document.getElementById('showForm');
  if (window.getComputedStyle(button).display === 'none') {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

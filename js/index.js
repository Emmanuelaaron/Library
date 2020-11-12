const myLibrary = [];




function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function getBookDetails() {
  // console.log(document.getElementById('book').value);
  let value = document.getElementById('book').value
  myLibrary.push(value)
  displayAllBooks()

  // let totalBooks = document.getElementById('totalBooks')
  // totalBooks.innerText += value
}
function addBookToLibrary() {
  // do stuff here
}

displayAllBooks()

function displayAllBooks() {
  let totalBooks = document.getElementById('totalBooks')
  // totalBooks.innerText = 'some text'
  for (let i = 0; i < myLibrary.length; i++) {
    totalBooks.innerText += myLibrary[i]
  }
}

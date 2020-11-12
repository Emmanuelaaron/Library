let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function displayForm() {
  let formContainer = document.getElementById('formContainer')
  formContainer.style.display = 'block'
  document.getElementById('showForm').style.display = 'none'
}

function getBookDetails() {
  let title = document.getElementById('bookTitle').value
  let author = document.getElementById('authorName').value
  let pages = document.getElementById('pageNum').value
  let newBook = new Book(title, author, pages)
  addBookToLibrary(newBook)
}
function addBookToLibrary(newBook) {
  myLibrary.push(newBook)
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i])
    
  }
}
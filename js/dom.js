function renderPage() {
  const bookContainer = document.getElementById('bookContainer');
  bookContainer.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card', 'card-custom', 'my-3');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h3');
    title.classList.add('card-title');
    title.innerText = myLibrary[i].title;

    const author = document.createElement('p');
    author.classList.add('card-text');
    author.innerText = `Author :- ${myLibrary[i].author}`;

    const pages = document.createElement('p');
    pages.classList.add('card-text');
    pages.innerText = `Pages :- ${myLibrary[i].pages}`;

    cardBody.appendChild(title);
    cardBody.appendChild(author);
    cardBody.appendChild(pages);

    card.appendChild(cardBody);

    bookContainer.appendChild(card);
  }
}
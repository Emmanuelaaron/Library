/* eslint-disable no-unused-vars */

function renderBook(myLibrary) {
  const bookContainer = document.getElementById('bookContainer');
  bookContainer.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card', 'my-3', 'mx-1', 'shadow-sm', 'col-3');

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

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    const deleteCard = document.createElement('button');
    deleteCard.innerText = 'Delete';
    deleteCard.classList.add('btn', 'btn-danger');
    deleteCard.onclick = function () {
      myLibrary.splice(i, 1);
      renderBook(myLibrary);
    };

    const readStatus = document.createElement('button');
    readStatus.classList.add('btn', 'btn-info', 'my-2');
    const read = 'Not read! finish reading';
    const notRead = 'Undo read status';
    if (myLibrary[i].readStatus === true) {
      readStatus.innerText = notRead;
    } else {
      readStatus.innerText = read;
    }
    readStatus.onclick = function () {
      if (readStatus.innerText === read) {
        readStatus.innerText = notRead;
      } else {
        readStatus.innerText = read;
      }
    };

    cardFooter.appendChild(deleteCard);
    cardFooter.appendChild(readStatus);

    card.appendChild(cardFooter);

    bookContainer.appendChild(card);
  }
}

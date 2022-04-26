const titleParent = document.querySelector('.books_warn');
const myBooks = document.querySelector('#my_books');
const theLinks = document.querySelector('#my_list');
const linkUp = document.querySelector('#linking');
const linkContact = document.querySelector('#cont');
const bookParent = document.querySelector('#livre');
let books = JSON.parse(localStorage.getItem('books'));
export default class Books {
    static addBooks = () => {
      linkUp.addEventListener('click', () => {
        const Reveal = ` 
            <div class="sectionAdded">
              <div class="line"></div>
              <h2>Add a new book</h2>
              <input type="text" id="title" class="workInput" placeholder="title">
              <input type="text" id='author' class="workInput" placeholder="author">
              <p class="setError" id="setError"></p>
              <p class="sucess" id="success"></p>
              <button type="button" class="AddingButton" id="addingBtn">Add the Book</button>
            </div>
          `;
        bookParent.innerHTML = Reveal;
        const title = document.querySelector('#title');
        const author = document.querySelector('#author');
        const btnAdded = document.querySelector('#addingBtn');
        const setError = document.querySelector('#setError');

        btnAdded.addEventListener('click', () => {
          const theBookTitle = title.value;
          const theBookAuthor = author.value;
          if (theBookTitle === '' || theBookAuthor === '') {
            setError.style.cssText = `
            display: block;
            color: orange;
            font-style: italic;
          `;
            setError.textContent = 'fill all the fields please';
            setTimeout(() => {
              setError.style.display = 'none';
            }, 3000);
            return;
          }
          const newBook = {
            id: Math.floor(Math.random() * 1000 + 1),
            title: theBookTitle,
            author: theBookAuthor,
          };

          let thebuk;
          if (this.grabBooksInLs() === null) {
            thebuk = [];
          } else {
            thebuk = this.grabBooksInLs();
          }
          thebuk.push(newBook);

          books = thebuk;
          this.addedbksLS(thebuk);
          this.contentInUi();
          title.value = '';
          author.value = '';
          setError.style.cssText = `
            display: block;
            color: blue;
          `;
          setError.textContent = 'the Book is added successfully!';
          setTimeout(() => {
            setError.style.display = 'none';
          }, 2000);
        });
      });
    }

    static bookDeleting = () => {
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-xmark')) {
          const id = parseInt(e.target.dataset.id, 10);
          const thebuk = books.filter((book) => book.id !== id);
          books = thebuk;
          this.contentInUi();
          this.addedbksLS(thebuk);
        }
      });
    }

      static grabBooksInLs = () => JSON.parse(localStorage.getItem('books'));

      static addedbksLS = (thebuk) => {
        const dataToStore = JSON.stringify(thebuk);
        localStorage.setItem('books', dataToStore);
        this.contentInUi();
      }

      static contentInUi = () => {
        let Reveal = '';
        if (Books.grabBooksInLs() === null) {
          myBooks.innerHTML = '<h3 class="noBooks">There are no books available !</h3>';
          titleParent.style.display = 'none';
          return;
        }
        if (books.length === 0) {
          myBooks.innerHTML = '<h3 class="noBooks">There are no books available !</h3>';
          titleParent.style.display = 'none';
          return;
        }
        titleParent.style.display = 'block';
        books.forEach((book) => {
          const { id, title, author } = book;
          const oneBook = `
          <div class="masterPiece">
            <span>"${title}" of ${author}</span>
            <span class="Remove"><i class="fa-solid fa-xmark" data-id=${id}></i></span>
          </div>
          `;
          Reveal += oneBook;
        });
        myBooks.innerHTML = Reveal;
      };

      static contactSection = () => {
        titleParent.style.display = 'none';
        linkContact.addEventListener('click', () => {
          const Reveal = `
            <h1 class="books-title">Contact Info</h1>
            <p class="contact-text">Do have any suggestion? you can reach out to us</p>
            <ul class="contact-list ">
              <li>our email: rold@mail.com</li>
              <li>Cell: 0563567483</li>
              <li>Location: KG732, Kgl City, Country</li>
            </ul>
          `;
          bookParent.innerHTML = Reveal;
        });
      }

      static listSection = () => {
        theLinks.addEventListener('click', () => {
          window.location.reload();
        });
      }
}
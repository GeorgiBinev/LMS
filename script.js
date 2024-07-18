document.addEventListener('DOMContentLoaded', () => {
    // Book and User Data Structures
    const books = [];
    const users = [];

    // Elements
    const bookList = document.getElementById('book-list');
    const userList = document.getElementById('user-list');

    // Add Book
    document.getElementById('add-book-button').addEventListener('click', () => {
        const title = document.getElementById('book-title').value;
        const author = document.getElementById('book-author').value;
        if (title && author) {
            const id = books.length ? books[books.length - 1].id + 1 : 1;
            books.push({ id, title, author, isAvailable: true });
            document.getElementById('book-title').value = '';
            document.getElementById('book-author').value = '';
            displayBooks();
        }
    });

    // Add User
    document.getElementById('add-user-button').addEventListener('click', () => {
        const name = document.getElementById('user-name').value;
        if (name) {
            const id = users.length ? users[users.length - 1].id + 1 : 1;
            users.push({ id, name, borrowedBooks: [] });
            document.getElementById('user-name').value = '';
            displayUsers();
        }
    });

    // Display Books
    function displayBooks() {
        bookList.innerHTML = '';
        books.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.id}. ${book.title} by ${book.author}`;
            li.style.color = '#ECF0F1';
            if (book.isAvailable) {
                const borrowButton = document.createElement('button');
                borrowButton.textContent = 'Borrow';
                borrowButton.addEventListener('click', () => borrowBook(book.id));
                li.appendChild(borrowButton);
            } else {
                const notAvailableSpan = document.createElement('span');
                notAvailableSpan.textContent = ' (Not Available)';
                notAvailableSpan.style.color = '#C80036';
                li.appendChild(notAvailableSpan);
            }
            bookList.appendChild(li);
        });
    }

    // Display Users
    function displayUsers() {
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.id}. ${user.name}`;
            li.style.color = '#ECF0F1';
            
            if (user.borrowedBooks.length > 0) {
                const ol = document.createElement('ol');
                user.borrowedBooks.forEach(bookId => {

                    const book = books.find(b => b.id === bookId);

                    const borrowedLi = document.createElement('li');
                    borrowedLi.textContent = book.title;
                    borrowedLi.style.color = '#ECF0F1';

                    const returnButton = document.createElement('button');
                    returnButton.textContent = 'Return';
                    returnButton.addEventListener('click', () => returnBook(user.id, book.id));
                    borrowedLi.appendChild(returnButton);

                    ol.appendChild(borrowedLi);
                });
                li.appendChild(ol);
            }
            userList.appendChild(li);
        });
    }

    // Borrow Book
    function borrowBook(bookId) {
        const userId = prompt("Enter User ID:");
        const user = users.find(u => u.id == userId);
        const book = books.find(b => b.id == bookId);
        if (user && book && book.isAvailable) {
            book.isAvailable = false;
            user.borrowedBooks.push(bookId);
            displayBooks();
            displayUsers();
        } else {
            alert("Invalid User ID!");
        }
    }

    // Return Book
    function returnBook(userId, bookId) {
        const user = users.find(u => u.id == userId);
        const book = books.find(b => b.id == bookId);
        if (user && book) {
            book.isAvailable = true;
            user.borrowedBooks = user.borrowedBooks.filter(id => id !== bookId);
            displayBooks();
            displayUsers();
        }
    }
});

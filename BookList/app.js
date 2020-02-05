// Book constructor
function Book(author, title, isbn) {
    this.author = author;
    this.title = title;
    this.isbn = isbn;
}
// UI constructor
function UI() {

}
// Show alert
UI.prototype.showAlert = function (message, className) {
    // create div
    const alert = document.createElement('div');
    // assign class name
    alert.className = `alert ${className}`;
    // add text
    const textnode = document.createTextNode(message);
    alert.appendChild(textnode);
    // get parent
    const parent = document.getElementById('book-form');
    // add div
    parent.insertBefore(alert, parent.childNodes[0]);
    setTimeout(function () {
        document.querySelector('.alert').remove()
    }, 3000)
}


// Add book
UI.prototype.addBook = function (book) {
    const ui = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = createTr(book);
    ui.appendChild(row);
}

// Clear fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Delete book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}
// submit event for add book
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        // Get value UI
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        const newbook = new Book(author, title, isbn);

        const ui = new UI();

        // Validate
        if (author === '' || title === '' || isbn === '') {
            ui.showAlert('Please fill all fields!!!', 'error');
        }
        else {
            ui.addBook(newbook);
            // Show success
            ui.showAlert('Book added', 'success');
            ui.clearFields();
        }
        e.preventDefault();
    });

// Create tr  element
function createTr(book) {
    return `<td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
            <a href="#" class="delete" >X</a></td>`;
}

// event for delete book
document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book Deleted!', 'success');
})

//homework convert to es6
// add local storage class
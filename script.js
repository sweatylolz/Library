let myLibrary = [];
let formcontainer = document.getElementById("form-container");
let formbutton = document.getElementById("form-btn");
let closebutton = document.getElementById("close");
let submit = document.getElementById("book-submit");

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.info = function () {
        console.log(title + " by " + author)
    }
} 

function addBookToLibrary(myLibrary, book) {

    myLibrary.push(book);
    return myLibrary;
}

function goThroughBooks(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
      }
}

function showForm() {
    formcontainer.style.visibility="visible";
}

function closeForm() {
    formcontainer.style.visibility = "hidden";
}

submit.addEventListener('click', addBookClick)
function addBookClick() {
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("author").value;
    let book = document.getElementById("book1");
    book.textContent = "Title: " + title + " " + " Author: " + author;
}



let myLibrary = [];
let formcontainer = document.getElementById("form-container");
let formbutton = document.getElementById("form-btn");
let closebutton = document.getElementById("close");


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

let submit = document.getElementById("book-submit");
submit.addEventListener('click', addBookClick) 
function addBookClick() {
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("author").value;
    // let book = document.getElementById("book1");
    console.log(title + " by " + author);
    const book = new Book(title, author);
    addBookToLibrary(myLibrary, book);
    console.log(goThroughBooks(myLibrary));
}




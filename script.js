let myLibrary = [];

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
    
}

let book1 = new Book('papa', 'papa');
let book2 = new Book('wow', 'wowzers');

const formbtn = document.querySelector('#form-btn');
 formbtn.addEventListener("click", addFunction) 
 function addFunction() {
    document.popup.style.visibility="visible";
 }
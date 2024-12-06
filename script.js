let myLibrary = [];
let formcontainer = document.getElementById("form-container");
let formbutton = document.getElementById("form-btn");
let closebutton = document.getElementById("close");
let counter = 0;
let index = 0;

function Book(title, author) {
    this.index = index;
    this.title = title;
    this.author = author;
    this.info = function () {
        console.log(title + " by " + author)
    }
} 

function addBookToLibrary(myLibrary, book) {
    myLibrary.push(book);
    index++;
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



function addTextToPage(book) {
    let bookid = counter++;
    var bookContainer = document.createElement("div");
    var para = document.createElement("p");
    var node = document.createTextNode(book);
    var btn = document.createElement("button");
    para.appendChild(node);
    var pContainer = document.getElementById("books-container");
    pContainer.appendChild(bookContainer);
    bookContainer.appendChild(para);
    bookContainer.appendChild(btn);
    bookContainer.id = bookid;
    bookContainer.classList = "book";
    btn.textContent = "Remove";
    btn.id = bookid;
    btn.classList = "btn";
    btn.addEventListener("click", removeBook);
    return counter;
}

function removeBook(myLibrary) {

        document.addEventListener('click', function (e) {
            if (e.target.matches('.btn')) {
                e.target.parentNode.remove();
            } 
          }, false);
    
          let ppp = myLibrary.findIndex( index => Book.index === index);
          myLibrary.splice(ppp,1);
        //   return myLibrary;
    }


    



let submit = document.getElementById("book-submit");
submit.addEventListener('click', addBookClick);

function addBookClick() {
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("author").value;
    const book = new Book(title, author);
    let bookid = counter;
    book.id = bookid;
    addBookToLibrary(myLibrary, book);
    addTextToPage(book.title + " by " + book.author);
    // goThroughBooks(myLibrary);
}




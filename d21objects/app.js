/* eslint-disable no-unused-vars */
/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
export function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
export function findTitles() {
    let titles = [];

    //titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions

    for (let element of library) {
        titles.push(element.title);
    }
    titles.sort();
    return titles;
}

/**
 * 
 * @param {String} title - of the book
 * @param {String} author author of the book
 * @param {Number} libraryID  the book ID
 * @returns {Object} newBook arrays of newBook
 */
export function addBook() {
    const titleElement = document.getElementById("title"); //retrieves the book title textbox element
    const title = titleElement.value;
    console.log("title is: ", title);
    //alert("title:  " + title);

    const bookAuthor = document.getElementById("author");
    const author = bookAuthor.value;
    console.log("author is: ", author);
 
    const libId = document.getElementById("library");
     const bookId = libId.value;
    console.log("Library ID is: ", bookId);
 
    const newID = library.length + 5000;  // hack to get a unique id for now
    //finish the implementation -- get the author, create a book object, and add to the library array

    let newBook = {  
        title:title,
        author:author,
        libraryID:bookId, };

    library.push(newBook);
    return newBook;

}

/**
 * 
 * @returns {Array} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
export function findAuthors() {
    //implement this
    let authors = [];

    for (let element of library) {
        authors.push(element.author);
    }
    authors.sort();
    return authors;
}


/**
 * 
 * @returns {Array} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
export function findIDs() {
    //implement this
    const IDs = [];

    for (let element of library) {
        IDs.push(element.libraryID);
    }
    IDs.sort();
    return IDs;
}


/*
 * @returns {Object} new book object
 * createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
 */

/**
 * 
 * @param {String} title 
 * @param {String} author 
 * @param {String} libraryID 
 * @returns {String} newBook 
 */

// eslint-disable-next-line require-jsdoc
export function createBook(title, author, id) {
    //implement this

    let newBook = { };
    newBook.title = title;
    newBook.author = author;
    newBook.libraryID = id;
    
    library.push(newBook);

    return newBook;
}

/**
 * 
 * @returns {undefined} 
 */
export function scramble() {
    console.log("implement scramble if you have time ...");

}


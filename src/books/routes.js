
const { Router } = require("express")
const bookRouter = Router()

const {addBook, updateBook, deleteBook, deleteAllBooks} = require("./controllers")

//add new book to database
bookRouter.post("/books/addbook", addBook)

bookRouter.put("/books/updatebook", updateBook) // update book in database

bookRouter.delete("/books/deletebook", deleteBook) // delete book from database

bookRouter.delete("/books/deleteAllBooks", deleteAllBooks) //delete all books from database 
 

module.exports = bookRouter


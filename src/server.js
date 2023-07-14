require ("dotenv").config()

const express = require("express")

const Book = require("./books/model")

const Author = require("./authors/model")
const authorRouter = require("./authors/routes")


const Genre = require("./genre/model")
const genreRouter = require("./genre/routes")


const bookRouter = require("./books/routes")

const port = process.env.PORT || 5001 

const app = express()
app.use(express.json())

const syncTables = () => {
    Author.hasMany(Book);
    Book.belongsTo(Author)

    Book.sync({ alter: true });
    Author.sync({ alter: true });
    Genre.sync({ alter: true });
    
}

app.use(bookRouter) 
app.use(authorRouter)
app.use(genreRouter)


app.listen(port, () =>{
    syncTables()
    console.log(`server is running on port ${port}`)
})
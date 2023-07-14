const Book = require("./model")
const Author = require("../authors/model")

const addBook = async (req, res) => {
    try {

        const author = await Author.findOne({
            where: {authorName: req.body.author}


        })
        console.log(author)
        console.log("!!!!!!!")


        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            AuthorId: author.id
        })

        res.status(201).json({message:"success", book:newBook})

    }catch (error) {
        res.status(501).json ({errorMessage: error.message, error: error})
        console.log(error)

    }
}

const updateBook = async (req, res) =>{

    try { 
        const updateBook = await Book.update(
            {
                title: req.body.newTitle
            },
            //update the title where the title is equal in the database the title passed
            {
                where: {
                    title: req.body.title 
                }
            }
        )
        res.status(201).json({message:"success", updateResults:updateBook})




    }catch (error) {
        res.status(501).json ({errorMessage: error.message, error: error})
        console.log(error)

    }

}

const deleteBook = async (req, res) => {

try {
    const deleteBook = await Book.destroy({
        where: {
            title: req.body.title,
        }

    })
        res.status(201).json({message:"Book Deleted by Title", updateResult:deleteBook})

    }   catch (error) {   

        res.status(501).json ({errorMessage: error.message, error: error})
        console.log(error)
    }
};

    const deleteAllBooks = async (req, res) => {
        try {
            const deleteAllBooks = await Book.destroy({
                
                truncate: true
            })
            res.status(201).json({message:"All Books Have Been Deleted", updateResult:deleteAllBooks})


        } catch (error) {  
            res.status(501).json ({errorMessage: error.message, error: error})
            console.log(error)
        }
    };





module.exports = {
    addBook,
    updateBook,
    deleteBook,
    deleteAllBooks
}
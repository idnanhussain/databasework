const Author = require("./model")
const Book = require("../books/model")


const addAuthor = async (req, res) => {
    try {
        const author = await Author.create({
            authorName: req.body.authorName
        })
        res.status(201).json({message: "success", newAuthor: author})




    }catch (error) {
        res.status(501).json({errormessage: error.message, error: error})
    }
}


const getAuthorandBooks = async (req, res) =>{

    try{
        const author = await Author.findOne({
            where: {authorName: req.body.author},
            include: Book,
        })
        res.status(201).json({message: "success", author: author})




    }catch (error){
        res.status(501).json({errormessage: error.message, error: error})
    }

}


module.exports = {
    addAuthor,
    getAuthorandBooks
}
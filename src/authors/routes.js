const { Router } = require ("express")

const router = Router()

const {addAuthor, getAuthorandBooks} = require("./controllers")

router.post("/authors/addAuthor", addAuthor)

router.post("/authors/getBooksandAuthors", getAuthorandBooks)



module.exports = router
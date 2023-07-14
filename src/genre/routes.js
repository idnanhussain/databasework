const { Router } = require ("express")

const router = Router()

const { addGenre } = require("./controller")

router.post("/genres/addGenre", addGenre)


module.exports = router

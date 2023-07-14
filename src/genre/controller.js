const Genre = require("./model")


const addGenre = async (req, res) => {
    try {
        const genre = await Genre.create({
            genreName: req.body.genre

        })
        res.status(201).json({message: "Added New Genre", newGenre: genre})
    
    
    }catch (error) {
        res.status(501).json({errormessage: error.message, error: error})
}}




module.exports = {
addGenre
}

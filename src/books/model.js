const {DataTypes} = require("sequelize")

const connection = require("../db/connection")

// .define is a sequelize method that allows us to create a model for our database
// a model create a structure for a table called books in our database
const Book = connection.define("Book", {
    title: {
        type:DataTypes.STRING,
        allowNull: false, 
        unique:true
    }, 
    author:{
    type:DataTypes.STRING
    },
    genre: {
        type:DataTypes.STRING
    },
    AuthorId: {
        type:DataTypes.INTEGER
    }



})

module.exports = Book
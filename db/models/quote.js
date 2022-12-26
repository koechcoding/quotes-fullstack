//Import the database
const db = require('../db/config');
//instantiate a new object
//this will interface with the quotes database
//specifically the quotes table
const quote = {};

//Define methods for the quote object

//Returns all the quotes from the table
quote.findAll =()=>{
    return db.query(
        `SELECT * FROM quotes`
    );
};

//Return one quote with the specific id
quote.findById =(id)=>{
    return db.oneOrnone(
        `
        SELECT * FROM quotes
        WHERE id = $1
        `,
        [id]
    );
};

//export the quote object
module.exports = quote;
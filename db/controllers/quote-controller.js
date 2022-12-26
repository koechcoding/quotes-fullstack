//import the quote model
const quote= require('../models/quote');
//instantiate the controller object
const quoteController = {};

//controller method for handling a request for all quotes
quoteController.findAll = (req, res) =>{
    //Uses the findAll method from quote
    quote.findAll()
        .then(quotes =>{
            //Sends the quotes as a JSON object
            res.json({
                message: 'Success',
                data: quotes
            });
        })
        .catch(err =>{
            //if something goes wrong it logs th error and sends as JSON object
            console.log(err);
            res.status(500).json({err});
        });
};
//controller method for handling a request for a single quote
quoteController.findById = (req, res) => {
    // Quotes method for finding by id, passes the id as an argument
    quote.findById(req.params.id)
    .then(quote => {
      // Sends the quote as a JSON object
      res.json({
        message: "Success",
        data: quote
      });
    })
    .catch(err => {
      // If something goes wrong it logs the error in the console and sends it as a JSON object
      console.log(err);
      res.status(500).json({err});
    });
  };
  // Export the controller
  module.exports = quoteController;
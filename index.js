const cors = require("cors");
const express = require("express");
const {getAllBooks, getBooksById} = require("./controllers");
const app = express();
app.use(cors());
app.use(express.json());

//Endpoint to get all books
app.get("/books",async(req,res)=>{
  const book = getAllBooks();
  res.json({book});
});
//Endpoint to get book details by id
app.get("/books/details/:id",async(req,res)=>{
let book = getBooksById(parseInt(req.params.id));
res.json({
  book,
});
});
module.exports = {app};
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);


const weightSchema = new Schema({
  title: { type: String, required: true },
  weight: { type: Number, required: true },
  days: Number,
  date: { type: Date, default: Date.now }
});

const Weight = mongoose.model("Weight", weightSchema);


//module.exports = Book;
module.exports = Weight;
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [{
    authors: ["George R. R. Martin"],
    description: "The perfect gift for fans of HBOs Game of Thrones—a boxed set featuring the first four novels! ",
    image: "https://books.google.com/books/content?id=mA8A4BYWB1IC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72oHDXKWRINjvZZ7qTUXo8W55n-vjwS00kgwho8kCe-rIbUsHcIiE7beja9PYQflp-uukmI3y313ytKBtkuSIgLIub1RuHyc1K2CEMFpdSPC9_OkB5rtFJcgXMnWERe4asUQ4rc",
    link: "https://books.google.com/books?id=mA8A4BYWB1IC&dq=game+of+throne&hl=&source=gbs_api",
    title: "A Game of Thrones",
}]

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
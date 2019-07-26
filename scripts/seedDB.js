const mongoose = require("mongoose");
const db = require("../database/models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/user-passport"
);

const wSeed = [{
  username: "GOT",
  password: "111",
   
}]

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(wSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
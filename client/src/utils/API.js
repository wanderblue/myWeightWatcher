import axios from "axios"
import dotenv from 'dotenv'
dotenv.config()

export default {

    // Get book from google search 
    getNutrition: function(query) {
      const API_KEY =  process.env.API_KEY;
      const API_ID = process.env.API_ID;
  //    return axios.get("https://api.edamam.com/api/nutrition-data?app_id=8a20c618&app_key=4edced0a7ac63a4a17315af2c11b13b1&ingr=one%20large%20apple")
      return axios.get("https://api.edamam.com/api/nutrition-data?app_id=8a20c618&app_key=4edced0a7ac63a4a17315af2c11b13b1&ingr=" + query)
   //return axios.get("https://api.edamam.com/api/nutrition-data?app_id=" + API_ID + "&app_key=" + API_KEY + "&ingr=" + query)


},
  //  4edced0a7ac63a4a17315af2c11b13b1	—
//8a20c618



  // Gets all books
  getBooks: function() {
    return fetch("/api/books");
  },
  // Gets the book with the given id
 // getBook: function(id) {
   // return fetch("/api/books/" + id);
  //},

  getUser: function(id) {
    return fetch("/api/books/" + id);
  },

  
  // Deletes the book with the given id
  deleteBook: function(id) {
    return fetch("/api/books/" + id, {
      method: 'DELETE'
    });
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return fetch("/api/books", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookData)
    })
  }
};

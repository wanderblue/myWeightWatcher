import React, { Component } from "react";
import API from "../utils/API";
//import Jumbotron from "../components/Jumbotronb";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"
import Navbar from '../components/navbar'
import dotenv from 'dotenv'
const APP = require('dotenv').config('.env')

class SearchBooks extends Component {
    //create state
    state = {
        search: "",
        books: [{calories: "", sugar: "", fat: ""}],
        error: "",
        message: ""
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        let q = this.state.search.replace(/\s/g, "%20");
        console.log("$$$$$$$$$$>", APP.API_ID)

       
 //    API. getNutrition(this.state.search)
 API. getNutrition(q)
           .then(res => {
               console.log(">>>>>",res.data)
      //          if (res.data.items === "error") {
        //            throw new Error(res.data.items);
          //      }
            //    else {
                    // store response in a array
                    //let results = res.data.items
                    let results = res.data.totalNutrients
                    //map through the array 
//                   results = results.map(result => {
                        //store each book information in a new object 
                      let  result = [{
                           
                            calories: results.ENERC_KCAL.quantity,
                            sugar: results.SUGAR.quantity,
                            fat: results.FASAT.quantity,
                      }]
                      console.log(">>>>>",result)
  //                      return result;
    //                })
                    // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    this.setState({ books: result, error: "" })
              //  }
            })
            //.catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
            <Navbar  />             
            <h3>Search Food</h3>
            <Container fluid>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                
                <br></br>
                <Container>
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
            </>
        )
    }


}

export default SearchBooks
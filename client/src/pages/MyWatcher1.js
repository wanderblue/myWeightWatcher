import React, { Component } from "react";
import API from "../utils/API";
//import Jumbotron from "../components/Jumbotronb";
import { Container, Row, Col } from "../components/Grid";
import ViewForm from "../components/ViewForm";
import SearchResult from "../components/SearchResult"
import SearchForm from "../components/SearchForm";
import UpdateForm from "../components/UpdateForm";
import Nav from "../components/Nav";

class SearchBooks extends Component {
    //create state
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        API.getBooks(this.props.user)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // store response in a array
                    let results = res.data.items
                    //map through the array 
                    results = results.map(result => {
                        //store each book information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
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
           <Container fluid>
           <Nav />
                <Container>
                    <Row>
                        <Col size="12">
                            <ViewForm
                                handleFormSubmit={this.handleFormSubmit}
    
                            />
                        </Col>
                    </Row>
                </Container>
                <h6>Fall In Love with Taking Care of Yourself</h6>   
           
                <Container>
                    <Row>
                        <Col size="12">
                            <UpdateForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <h6>Eat what you love and lose weight</h6>   
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
        )
    }


}

export default SearchBooks
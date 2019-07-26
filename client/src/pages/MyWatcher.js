import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Navbar from '../components/navbar'
import Chart from 'chart.js';

var moment = require('moment');
class Books extends Component {
   
  
  state = {
    books: [],
    title: "",
    days: "",
    weight: "",
    loggedIn: true,
  };

//  componentDidMount() {
  //  this.loadBooks();
  //}

  loadBooks1 = () => {
    API.getBooks()
      .then(response => response.json())
      .then(res =>
        this.setState({ books: res, title: "" })
      )
      .catch(err => console.log(err));
  };

  loadBooks = () => {
    API.getUser(this.props.user)
      .then(response => response.json())
      .then(res =>
        this.setState({ books: res, title: "", weight: "", days: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(response => response.json())
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if ( this.state.weight) {
      API.saveBook({
        title: this.props.user,
        weight: this.state.weight,
        days: this.state.days
      })
        .then(response => response.json())
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };
  


  render() {
    return (
            <>
      <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} /> 

      <Container fluid>
        <row><h6>welcome, {this.props.user}!</h6></row>
        <Row>
          <Col size="md-6">
            <Jumbotron>
           
               <h4>Update your records</h4>

            </Jumbotron>
            <form>
              <Input
                value={this.state.weight}
                onChange={this.handleInputChange}
                name="weight"
                placeholder="weight (required)"
              />
              <TextArea
                value={this.state.days}
                onChange={this.handleInputChange}
                name="days"
                placeholder="days (Optional)"
              />
              <FormBtn
                disabled={!(this.state.weight)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
             
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
            
              <h4>View your records</h4>

              <FormBtn
              
                onClick={this.loadBooks}
              >
                Submit
              </FormBtn>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.reverse().map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                {book.title} : {book.weight} lb at (Day {book.days}) {moment(book.date).format( 'LLL')}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
         <h4></h4>
            )}
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Books;

import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"

const SearchResult = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>

                        {props.books.map(book => {
                            return (
                                <li className="search-list list-group-item">
                                    <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                                        {/* col-3 show image of the book */}
                                        <Col size="1" className="emptyCol"/>
                                        {/* col-9 show information of the book */}
                                        <Col size="9" className="bookInfo">
                                            <Row>
                                                <h3 className="bookTitle">Total calories: {book.calories}</h3>
                                            </Row>
                                            <Row>
                                                <h3 className="bookAuthor">Sugar(g): {book.sugar}</h3>
                                            </Row>
                                            <Row>
                                                <h3 className="bookDescription">Saturated Fat(g): {book.fat}</h3>
                                            </Row>
                                        </Col> 
                                    </Row>
                                    <br></br>
                                                                   </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchResult
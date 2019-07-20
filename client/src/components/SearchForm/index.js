import React from "react";
import "./style.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                
                <div className="BookSearchLabel"><h6>Please include the quantity and measure</h6></div>
                <br></br>
                <input className="col-11 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder=" one large apple"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default SearchForm
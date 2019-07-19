import React from "react";
import "./style.css";

const UpdateForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><h3>Update your records</h3></label>
                <br></br>
                
                <div className="col-10">Enter day number     
                <input className=" form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="1"
                    onChange={props.handleInputChange}
                />
                </div>

                <div className="col-10">Enter weight  (lb) 
                 <input className="form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="120"
                    onChange={props.handleInputChange}
                />
                </div>
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default UpdateForm
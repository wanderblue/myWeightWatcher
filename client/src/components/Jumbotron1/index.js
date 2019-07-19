import React from "react";
import "./style.css";
import { Icon, Button} from "react-materialize";
//import HomeCard1 from "../Cards";
import { Link } from "react-router-dom";


function Jumbotron() {
  return (
    <div>
      <div id="homepage" className="container">
        <div className="Welcome text-center">
          <h1 className="h1_homepage"> Welcome to My Weight Watcher</h1>
          <h5 className="p_homepage"> Begin your plan today! </h5>
        </div>
        <div>
          <Link to="/flight"><Button className="frontPageButton"> Flight</Button></Link>
          <Link to="/place"><Button className="frontPageButton"> Place</Button></Link>
          <Link to="/dining"><Button className="frontPageButton"> Dining</Button></Link>
        </div>     
      </div>
    </div>
  );
}

export default Jumbotron;


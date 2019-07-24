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
        <h4 className="App-title">待把相思灯下诉，一缕新欢，旧恨千千缕。最是人间留不住，朱颜辞镜花辞树。</h4>
          <h1 className="h1_homepage"> Welcome to My Fitness Watcher</h1>
          <h5 className="p_homepage"> Begin your plan today! </h5>
          
        </div>
        
      </div>
    </div>
  );
}

export default Jumbotron;


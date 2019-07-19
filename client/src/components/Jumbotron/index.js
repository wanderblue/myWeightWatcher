import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div  id="mypage" className="container"
      style={{ height: 100, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron" 
    >
      {children}
    </div>
  );
}

export default Jumbotron;

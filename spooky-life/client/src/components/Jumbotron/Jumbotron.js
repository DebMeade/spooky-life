import React from "react";
import "./jumbotron.css";

const Jumbotron = ({ children}) => (
    <div 
    style ={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center"}}
    className="jumbotron"
    >
    <h1>Haunted Houses</h1>
   {/* {children} */}
   </div>
);

export default Jumbotron;
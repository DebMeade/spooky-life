import React from "react";
import "./jumbotron.css";

const Jumbotron = ({ children }) => (
    <div class="shake-opacity">
    <div 
    style ={{ height: 300, clear: "both", paddingTop: 120}}
    className="jumbotron"
    >
   {/* {children} */}
   </div>
   </div>
);

export default Jumbotron;
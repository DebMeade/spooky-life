import React from "react";
import "./jumbotron.css";

const Jumbotron = ({ children }) => (
    <div class="shake-opacity custom">
    <div 
    style ={{ height: 300, clear: "both", paddingTop: 120}}
    className="jumbotron"
    >
   {/* {children} */}
   </div>
   </div>
);

export default Jumbotron;
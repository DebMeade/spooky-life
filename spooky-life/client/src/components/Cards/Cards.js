import React from "react";
import "./cards.css";
import background from "./cardImage.png"

const Cards = (props) => (
    <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top custom" src={background} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-title">{props.street}</p>
                <p className="card-title">{props.city}</p>
                <p className="card-title">{props.phone}</p>
                <p className="card-title">{props.link}</p>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            </div>
    </div>
);

export default Cards;
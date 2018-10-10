import React, { Component, Fragment } from "react";
import Jumbotron from "../../components/Jumbotron";
import Cards from "../../components/Cards";
// import API from "../../utils/API";

class HauntedHouses extends Component {
  state = {
    houses: [{ name: "Lil Scrape's House", street: "123 Yo Mamma Lane", city: "Rough Life", phone: "123-456-7890", link: "www.google.com" },
    { name: "Lil Scrape's House 2 ", street: "123 Yo Mamma Lane", city: "Rough Life", phone: "123-456-7890", link: "www.google.com" }],
    name: "",
    street: "",
    city: "",
    phone: "",
    link: ""
  };

  render() {
    return (

      <Fragment>

        <Jumbotron>
          <h1>Haunted Houses</h1>
        </Jumbotron>


        {this.state.houses.map(house => (
          <Cards
            name={house.name}
            street={house.street}
            city={house.city}
            phone={house.phone}
            link={house.link}
          />
        ))}

        ))

          </Fragment>

    );

  }

}

export default HauntedHouses;
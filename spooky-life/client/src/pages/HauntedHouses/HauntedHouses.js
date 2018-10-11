import React, { Component, Fragment } from "react";
import Jumbotron from "../../components/Jumbotron";
import Cards from "../../components/Cards";
import API from "../../utils/API";
import "./haunted.css";


class HauntedHouses extends Component {
  state = {
    houses: [],
    name: "",
    street: "",
    city: "",
    phone: "",
    link: ""
  };

  // { name: "Lil Scrape's House", street: "123 Yo Mamma Lane", city: "Rough Life", phone: "123-456-7890", link: "www.google.com" },
  //   { name: "Lil Scrape's House 2 ", street: "123 Yo Mamma Lane", city: "Rough Life", phone: "123-456-7890", link: "www.google.com" }

  componentWillMount() {
    this.loadHauntedHouses();
  }

  loadHauntedHouses = () => {
    // console.log("ONE")
    API.getHauntedHouses()
      .then(res =>
        // console.log(res)
        this.setState({ houses: res.data, name: "", street: "", city: "", phone: "", link: "" })
      )
      .catch(err => console.log(err))
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12 spooky">
              <Jumbotron>
                <h1>Haunted Houses</h1>
              </Jumbotron>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
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
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HauntedHouses;
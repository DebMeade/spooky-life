import React, { Component } from "react";
// import API from "../../utils/API";

class Houses extends Component {
  state = {
    houses: [],
    name: "",
    rating: "",
    location: "",
    phone: "",
    url: ""
  };

  componentDidMount() {
    this.loadHauntedHouses();
  }

  loadHauntedHouses = () => {
    API.getHauntedHouses()
    .then(res => 
      this.setState({ houses: res.data, name: "", rating: "", location: "", phone: "", url: "" }))
    .catch(err => console.log(err));
  };

  //below is if we want users to be able to add a hunted house
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.location && this.state.phone && this.state.url) {
      API.saveHauntedHouse ({
        name: this.state.name,
        location: this.state.location,
        phone: this.state.phone
      })
      .then(res => this.loadHauntedHouses())
      .catch(err => console.log(err));
    }
  };


  //printing info to page
  // render() {
  //   return (


  //   );
  // }



}

export default HauntedHouses;
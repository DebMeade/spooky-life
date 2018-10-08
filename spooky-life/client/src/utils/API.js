import axios from "axios";

export default {

  getHauntedHouses: function() {
    return axios.get("/api/hauntedhouses");
  }

  saveHauntedHouse: function() {
    return axios.post("/api/hauntedhouses", houseData);
  }
};
const router = require("express").Router();
const hauntedHousesController = require("../../controllers/hauntedHousesController");
const axios = require("axios");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const db = require("../../models");


// Matches with "/api/hauntedHoueses"
router.route("/")
    .get(hauntedHousesController.findAll);

router.route("/scrape")
  .get(function(req, res) {
  axios.get("http://hauntedhouses.com/haunted-houses/state/colorado/").then(function(response) {

  var $ = cheerio.load(response.data);

  $(".listing-details").each(function(i, element) {
    var result = {};


    result.name = $(this).children(".wpbdp-field-haunted_attraction_name").children(".value").children("a").text();
    result.street = $(this).children(".wpbdp-field-street_address").children("span").text();
    result.city = $(this).children(".wpbdp-field-city").children("span").text();
    result.phone = $(this).children(".wpbdp-field-phone_number").children("span").text();
    result.link = $(this).children(".wpbdp-field-haunted_attraction_name").children(".value").children().attr("href");
    console.log(result);

    db.hauntedHouses.create(result)
    .then(function(dbhauntedHouse) {
      console.log(dbhauntedHouse);
    res.send("Scrape Complete");

    })
    .catch(function(err) {
      return res.json(err);
    });
  });
    
  });
});
    
    // app.get("/hauntedhouses", function(req, res) {
    //   db.Article.find({})
    //     .then(function(dbHauntedHouses) {
    //       res.json(dbHauntedHouses);
    //     })
    //     .catch(function(err) {
    //       res.json(err);
    //     });
    // });

module.exports = router;
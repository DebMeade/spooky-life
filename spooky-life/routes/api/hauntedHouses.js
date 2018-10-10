const router = require("express").Router();
const hauntedHousesController = require("../../controllers/hauntedHousesController");

// Matches with "/api/hauntedHoueses"
router.route("/")
    .get(hauntedHousesController.findAll);

module.exports = router;
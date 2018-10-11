const express = require("express");
const hauntedHouses = require("./hauntedHouses");
const userRoute = require("./user");
const router = express.Router();
router.use("/hauntedHouses", hauntedHouses);
router.use("/user", userRoute);

module.exports = router;

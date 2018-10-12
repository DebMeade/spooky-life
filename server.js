const express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const mongo = require('mongodb');
const mongoose = require("mongoose");
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spookyLife");
var db = mongoose.connection;

// Start the API server
app.listen(PORT, function() {
 console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
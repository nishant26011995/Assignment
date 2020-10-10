const express = require("express"); // call express
const app = express(); // define our app using express
const bodyParser = require("body-parser");
var cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());




// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();

require("./src/routes/commonRoutes")(app);

module.exports = app;
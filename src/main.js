require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const { json, urlencoded } = require("body-parser");
const dbConnection = require("./config/dbConnection");
const router = require("./routes");
require("./schemas");

const app = express();
dbConnection();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(router);

module.exports = app;

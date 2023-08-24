const express = require("express");
const bodyParser = require("body-parser");
const registerController = require("../controllers/registerController");

const app = express();
app.use(bodyParser.json());

app.post("/register", registerController.register);

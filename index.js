
const bodyParser = require("body-parser");
const express = require("express");
const validator = require('validator');
const app = express();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const port = 3000;

const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/GreentThinkersDB');
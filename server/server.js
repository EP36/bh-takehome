const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

// const pool = require('./database.js');

const app = express();
const port = 3000;

// pool.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());


app.listen(port);

module.exports = app;
const express = require('express');
const app = express();
const env = require("dotenv").config();
const morgan = require('morgan');
// const bodyParser = require('body-parser');
const database = require('./config/database');
const router = require('./router');

database.connect();

// app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('combined'));

router(app);

app.listen(process.env.PORT, () => {
  console.log(`Back_End Request http://localhost:${process.env.PORT}`);
});
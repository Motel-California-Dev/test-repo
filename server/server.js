require('dotenv').config();
const express = require('express');
const db = require('./db');

const app = express();

app.get('/', () => {
  db.query('CREATE TABLE IF NOT EXISTS "user"(id SERIAL PRIMARY KEY, name varchar(255))')
    .then(() => {
      console.log('CREATE TABLE query was successful. Woo!');
    }).catch((err) => {
      console.log("fuck.");
      console.log(err);
    });
});

app.listen('3000', () => {
  console.log('App listening on port 3000');
});

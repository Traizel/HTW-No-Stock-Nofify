const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");
let crypto = require("crypto");
const router = express.Router();
const axios = require("axios");
const moment = require('moment');
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
require("dotenv").config();

let storeHash = process.env.STORE_HASH

//defines dates to auto delete certain things from the database.
let daterange = moment().subtract(5, "hours").subtract(30, "days");
let daterange2 = moment().subtract(5, "hours").subtract(2, "years");
let globalOrderNumber = ""

//BigCommerce API tokens and keys
let config = {
  headers: {
    "X-Auth-Client": process.env.BG_AUTH_CLIENT,
    "X-Auth-Token": process.env.BG_AUTH_TOKEN,
  },
};
//used to check if the current order is a new order.
let orderID = 0
let prevOrderID = 0

// Handles Ajax request for user information if user is authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

router.post("/addadmin", rejectUnauthenticated, (req, res, next) => {
  // used to reset user logins. It's on a permenent restricted path, only accessesable by manaully changing the code. Extremely secure and protected
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = encryptLib.encryptPassword(req.body.password);
  const role = req.body.role;

  //now lets add admin information to the user table
  const query2Text =
    'INSERT INTO "user" (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING id';
  pool
    .query(query2Text, [first_name, last_name, email, password, role])
    .then((result) => res.status(201).send(result.rows))
    .catch(function (error) {
      console.log("Sorry, there was an error with your query: ", error);
      res.sendStatus(500); // HTTP SERVER ERROR
    })

    .catch(function (error) {
      console.log("Sorry, there is an error", error);
      res.sendStatus(500);
    });
});



// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post("/login", userStrategy.authenticate("local"), (req, res) => {
  console.log("logging body", req.body.username)
  const email = req.body.username;
  // setting query text to update the username
  const queryText = `update "user" set "last_login" = NOW() WHERE "email"=$1`;

  pool.query(queryText, [email]).then((result) => {//when someone logs in, want to capture the time they log in

      res.sendStatus(201)
  });
});

// clear all server session information about this user
router.post("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;

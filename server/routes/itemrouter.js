const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require("axios");

let config = {
  //authenticate Big Commerce API
  headers: {
    "X-Auth-Client": process.env.BG_AUTH_CLIENT,
    "X-Auth-Token": process.env.BG_AUTH_TOKEN,
  },
};

let dateNow = moment().subtract(1, "days").format('YYYY-MM-DD')
let dateThen = moment().subtract(31, "days").format("YYYY-MM-DD");

setInterval(() => {
  dateNow = moment().format("YYYY-MM-DD");
  dateThen = moment().subtract(30, "days").format("YYYY-MM-DD");
}, 1000 * 60 * 60 * 24);

// NEED TO FINISH

app.get("/items", (req, res) => {
  axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0`,
      config
    )
    .then(function (response) {
      console.log(response.data);
      const queryText = `INSERT INTO "item" (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
      pool
        .query(queryText, [first_name, last_name, email, password, role])
        .then((result) => {
          res.send(result);
        })
        .catch((error) => {
          console.log(`Error on item query ${error}`);
          res.sendStatus(500);
        });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

let daterange = moment().subtract(6, "hours").subtract(1, "years");

const {
  //login verification middleware
    rejectUnauthenticated,
  } = require("../modules/authentication-middleware");

router.get("/itemlist", rejectUnauthenticated, (req, res) => {
  console.log("We are about to get the item list");

  const queryText = `select * from "item" ORDER BY id DESC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on item query ${error}`);
      res.sendStatus(500);
    });
})

router.post("/orderdetails", rejectUnauthenticated, (req, res) => {
  let order_number = req.body.order_number;
  console.log("this is the payload before it reaches the get", order_number);
  axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v2/orders/${order_number}/products`,
      config
    )
    .then(function (response) {
      console.log("this is the response", response.data)

      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
});

module.exports = router;
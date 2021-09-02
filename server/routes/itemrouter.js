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

const {
  //login verification middleware
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");


setInterval(() => {
  dateNow = moment().format("YYYY-MM-DD");
  dateThen = moment().subtract(30, "days").format("YYYY-MM-DD");
}, 1000 * 60 * 60 * 24);

app.get("/items", rejectUnauthenticated, (req, res) => {
  axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0`,
      config
    )
    .then(function (bcResponse) {
      const queryText = `DELETE from "item"`;
      pool
        .query(queryText)
        .then((itemResult) => {
        console.log('BC Data:', bcResponse.data);
        let bcItemName = bcResponse.data.name;
        let bcItemSku = bcResponse.data.sku;
        let bcItemInv = bcResponse.data.inventory_level;
      for(res of bcResponse.data) {
      const queryText = `INSERT INTO "item" (name, sku, inventory_level) VALUES ($1, $2, $3)`;
      pool
        .query(queryText, [bcItemName, bcItemSku, bcItemInv])
        .then((result) => {
        })
        .catch((error) => {
          console.log(`Error on item query ${error}`);
          res.sendStatus(500);
        });
        }
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

module.exports = router;
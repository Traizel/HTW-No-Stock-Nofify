const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require("axios");
const moment = require("moment");

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

router.get("/items", (req, res) => {
  axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0`,
      config
    )
    .then(function (bcResponse) {
      const queryText = `select * from "item" ORDER BY name DESC`;
      pool
        .query(queryText)
        .then((itemResponse) => {
      const queryText = `delete from "temp"`;
      pool
        .query(queryText)
        .then((response) => {
          let msg = '';
      if (!itemResponse.rows[1]) {
        console.log('Item Table Empty!');
      } else {
          for (let i = 0; i < itemResponse.rows.length; i++) {
            let data = itemResponse.rows;
            let bcItemName = data[i].name;
            let bcItemSku = data[i].sku;
            let bcItemInv = data[i].inventory_level;

          if (i === data.length - 1) {
            msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv});`);
          } else {
            msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}), `);
          }
        } 
      }
      let queryText = '';
      if (msg === '') {
        queryText = `select * from "item"`;
      } else {
        queryText = `INSERT INTO "temp" (name, sku, inventory_level) VALUES ${msg}`;
      }
      pool
        .query(queryText)
        .then((result) => {
      const queryText = `select * from "temp" ORDER BY name DESC`;
      pool
        .query(queryText)
        .then((tempResponse) => {
          let msg = '';
         // console.log('BC Data:', bcResponse.data.data);
      for(let i = 0; i < bcResponse.data.data.length ; i++) {
          let data = bcResponse.data.data;
          let bcItemName = data[i].name;
          let bcItemSku = data[i].sku;
          let bcItemInv = data[i].inventory_level;
          if (!itemResponse.rows[1]) {
            if (i === data.length - 1) {
              msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv});`);
            } else {
              msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}), `);
            }
          } else {
           // console.log(itemResponse.rows[i].name);
           // console.log(tempResponse.rows[i].name);
          if(i === data.length - 1 && tempResponse.rows[i].name !== itemResponse.rows[i].name) {
          msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv});`);
          }
          else if(tempResponse.rows[i].name !== itemResponse.rows[i].name) {
          msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}), `);
          } else {
            console.log('Already in Database!');
          }
        }
      }
      let queryText = '';
      if (msg === '') {
      queryText = `select * from "item"`;
      } else {
      queryText = `INSERT INTO "item" (name, sku, inventory_level) VALUES ${msg}`;
      }
      pool
        .query(queryText)
        .then((insertResult) => {
          console.log("We are about to get the item list");

          const queryText = `select * from "item" ORDER BY id DESC`;
          pool
            .query(queryText)
            .then((selectResult) => {
              res.send(selectResult.rows);
            })
            .catch((error) => {
              console.log(`Error on item query ${error}`);
              res.sendStatus(500);
            });
        })
        .catch((error) => {
          console.log(`Error on item query ${error}`);
          res.sendStatus(500);
          });
        })
        .catch((error) => {
          console.log(`Error on item query ${error}`);
          res.sendStatus(500);
          });
        })
        .catch((error) => {
          console.log(`Error on item query ${error}`);
          res.sendStatus(500);
          });
        })
        .catch((error) => {
          console.log(`Error on item query ${error}`);
          res.sendStatus(500);
        });
      })
      .catch((error) => {
        console.log(`Error on item query ${error}`);
        res.sendStatus(500);
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require("axios");
var lupus = require('lupus');
const { WebClient } = require("@slack/web-api");
const { createEventAdapter } = require("@slack/events-api");
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let config = {
  //authenticate Big Commerce API
  headers: {
    "X-Auth-Client": process.env.BG_AUTH_CLIENT,
    "X-Auth-Token": process.env.BG_AUTH_TOKEN,
  },
  // body: {
  //   "is_condition_shown": true
  // }
};


let slackNotify = false;
let stockNotify = false;
let resetNoStock = false;
let getSinglePage = false;
let update = false;
let pageToUse = 0;

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

const conversationId = "C02EV4JKSLA";

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);


//Waiter Function
function timeoutPromise(interval) {
      return new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve("done");
        }, interval);
      });
};


//Get All BC Items Function
async function getBCItems () {
    let bcResponse1;
    let bcResponse2;
    let bcResponse3;
    let bcResponse4;
    let bcResponse5;
    let bcResponse6;
    let bcResponse7;
    let bcResponse8;
    let bcResponse9;
    let bcResponse10;
    let bcResponse11;
    let bcResponse12;
    let bcResponse13;
    let bcResponse14;
    let bcResponse15;
    let bcResponse16;
    let bcResponse17;
    let bcResponse18;
    let bcResponse19;
    let bcResponse20;
    let bcResponse21;
    let bcResponse22;
    let bcResponse23;
    let bcResponse24;
    let bcResponse25;
    let bcResponse26;
    let bcResponse27;
    let bcResponse28;
    let bcResponse = [];


    try {
      bcResponse1 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=1`,
          config
        )
    } catch (err) {
      console.log('Error on Get1: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse2 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=2`,
          config
        )
    } catch (err) {
      console.log('Error on Get2: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse3 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=3`,
          config
        )
    } catch (err) {
      console.log('Error on Get3: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse4 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=4`,
          config
        )
    } catch (err) {
      console.log('Error on Get4: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse5 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=5`,
          config
        )
    } catch (err) {
      console.log('Error on Get5: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse6 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=6`,
          config
        )
    } catch (err) {
      console.log('Error on Get6: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse7 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=7`,
          config
        )
    } catch (err) {
      console.log('Error on Get7: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse8 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=8`,
          config
        )
    } catch (err) {
      console.log('Error on Get8: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse9 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=9`,
          config
        )
    } catch (err) {
      console.log('Error on Get9: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse10 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=10`,
          config
        )
    } catch (err) {
      console.log('Error on Get10: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse11 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=11`,
          config
        )
    } catch (err) {
      console.log('Error on Get11: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse12 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=12`,
          config
        )
    } catch (err) {
      console.log('Error on Get12: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse13 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=13`,
          config
        )
    } catch (err) {
      console.log('Error on Get13: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse14 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=14`,
          config
        )
    } catch (err) {
      console.log('Error on Get14: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse15 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=15`,
          config
        )
    } catch (err) {
      console.log('Error on Get15: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse16 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=16`,
          config
        )
    } catch (err) {
      console.log('Error on Get16: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse17 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=17`,
          config
        )
    } catch (err) {
      console.log('Error on Get17: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse18 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=18`,
          config
        )
    } catch (err) {
      console.log('Error on Get18: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse19 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=19`,
          config
        )
    } catch (err) {
      console.log('Error on Get19: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse20 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=20`,
          config
        )
    } catch (err) {
      console.log('Error on Get20: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse21 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=21`,
          config
        )
    } catch (err) {
      console.log('Error on Get21: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse22 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=22`,
          config
        )
    } catch (err) {
      console.log('Error on Get22: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse23 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=23`,
          config
        )
    } catch (err) {
      console.log('Error on Get23: ', err);
    }

await timeoutPromise(1000);
  
    try {
      bcResponse24 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=24`,
          config
        )
    } catch (err) {
      console.log('Error on Get24: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse25 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=25`,
          config
        )
    } catch (err) {
      console.log('Error on Get25: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse26 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=26`,
          config
        )
    } catch (err) {
      console.log('Error on Get26: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse27 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=27`,
          config
        )
    } catch (err) {
      console.log('Error on Get27: ', err);
    }

await timeoutPromise(1000);

    try {
      bcResponse28 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=28`,
          config
        )
    } catch (err) {
      console.log('Error on Get28: ', err);
    }

await timeoutPromise(1000);

    try {
      for (item of bcResponse1.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse2.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse3.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse4.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse5.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse6.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse7.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse8.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse9.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse10.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse11.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse12.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse13.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse14.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse15.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse16.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse17.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse18.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse19.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse20.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse21.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse22.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse23.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse24.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse25.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse26.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse27.data.data) {
        bcResponse.push(item);
       }
      } catch (err) {
        console.log('Error on bcCreate: ', err);

      }

await timeoutPromise(1000);

    try {
      for (item of bcResponse28.data.data) {
        bcResponse.push(item);
      }
    } catch (err) {
      console.log('Error on bcCreate: ', err);
    }

await timeoutPromise(500);

return bcResponse;
}


//Get Single BC Page Funciton
async function getSingleBCPage(page) {
  
let bcResponse1;
let bcResponse = [];

  try {
    bcResponse1 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=${page}`,
        config
      )
  } catch (err) {
    console.log('Error on Get: ', err);
  }

  await timeoutPromise(1000);

    try {
        for (item of bcResponse1.data.data) {
          bcResponse.push(item);
        }
      } catch (err) {
        console.log('Error on bcCreate: ', err);
      }

  return bcResponse;
}


//Add Items to Slack Notify and Database
async function addItems(bcResponse) {

      let msg = '';
      let bcItemId;
      let varItems = [];
      let getItems = [];
      let newItems = [];

console.log('Getting Products..');

    try {
      const queryText = `select * from "item" ORDER BY id DESC`;
      await pool
        .query(queryText)
        .then((getResult) => {
          getItems = getResult;
        })
    } catch (err) {
      console.log('Error on getItems: ', err);
    }

    await timeoutPromise(500);

    console.log('Checking Product Level..');

    try {
      if (!getItems.rows[0]) {
        console.log('Item DB Empty!');
        for (let i = 0; i < bcResponse.length; i++) {
          let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
          bcItemId = bcResponse[i].id;
          let bcItemSku = bcResponse[i].sku;
          let bcItemInv = bcResponse[i].inventory_level;
          let bcItemTrack = bcResponse[i].inventory_tracking;

          const district = 'District';
          const portauth = 'Port Authority';
          const sporttek = 'Sport-Tek';
          const newera = 'New Era';
          const ade = 'Alternative Dodgeball Eco';
          const aec = 'Alternative';
          const ej = 'Eco-Jersey';
          const champ = 'Champion';
          const nv = 'Nike';
          const gildan = 'Gildan';
          const cc = 'COMFORT COLORS';
          const hanes = 'Hanes';
          const aa = 'American Apparel';
          const jer = 'JERZEES';
          const fotl = 'Fruit of the Loom';
          const anvil = 'Anvil';
          const bc = 'BELLA+CANVAS';
          const cs = 'CornerStone';
          const pac = 'Port & Company';
          const red = 'Red House';
          const rabbit = 'Rabbit Skins';
          const uni = 'Unisex';
          const rk = 'Red Kap';
          const ro = 'Russell Outdoors';
          const nl = 'Next Level';

          if (bcItemInv === 0 && bcItemTrack !== 'variant' && item.name.includes(nl) === false && item.name.includes(ro) === false && item.name.includes(rk) === false && item.name.includes(uni) === false && item.name.includes(rabbit) === false && item.name.includes(red) === false && item.name.includes(pac) === false && item.name.includes(cs) === false && item.name.includes(bc) === false && item.name.includes(anvil) === false && item.name.includes(fotl) === false && item.name.includes(jer) === false && item.name.includes(aa) === false && item.name.includes(hanes) === false && item.name.includes(cc) === false && item.name.includes(gildan) === false && item.name.includes(district) === false && item.name.includes(portauth) === false && item.name.includes(sporttek) === false && item.name.includes(newera) === false && item.name.includes(ade) === false && item.name.includes(aec) === false && item.name.includes(ej) === false && item.name.includes(champ) === false && item.name.includes(champ) === false && item.name.includes(nv) === false) {
            msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
            newItems.push(bcResponse[i]);
          }
        }
      } else {
        for (let i = 0; i < bcResponse.length; i++) {
          bcItemId = bcResponse[i].id;
          let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
          let bcItemSku = bcResponse[i].sku;
          let bcItemInv = bcResponse[i].inventory_level;
          let bcItemTrack = bcResponse[i].inventory_tracking;
          let canInsert = true;

          for (let j = 0; j < getItems.rows.length; j++) {
            if (bcItemId === getItems.rows[j].id) {
              canInsert = false;
            }
          }

          const district = 'District';
          const portauth = 'Port Authority';
          const sporttek = 'Sport-Tek';
          const newera = 'New Era';
          const ade = 'Alternative Dodgeball Eco';
          const aec = 'Alternative';
          const ej = 'Eco-Jersey';
          const champ = 'Champion';
          const nv = 'Nike';
          const gildan = 'Gildan';
          const cc = 'COMFORT COLORS';
          const hanes = 'Hanes';
          const aa = 'American Apparel';
          const jer = 'JERZEES';
          const fotl = 'Fruit of the Loom';
          const anvil = 'Anvil';
          const bc = 'BELLA+CANVAS';
          const cs = 'CornerStone';
          const pac = 'Port & Company';
          const red = 'Red House';
          const rabbit = 'Rabbit Skins';
          const uni = 'Unisex';
          const rk = 'Red Kap';
          const ro = 'Russell Outdoors';
          const nl = 'Next Level';

          if (canInsert === true && bcItemInv === 0 && bcItemTrack !== 'variant' && item.name.includes(nl) === false && item.name.includes(ro) === false && item.name.includes(rk) === false && item.name.includes(uni) === false && item.name.includes(rabbit) === false && item.name.includes(red) === false && item.name.includes(pac) === false && item.name.includes(cs) === false && item.name.includes(bc) === false && item.name.includes(anvil) === false && item.name.includes(fotl) === false && item.name.includes(jer) === false && item.name.includes(aa) === false && item.name.includes(hanes) === false && item.name.includes(cc) === false && item.name.includes(gildan) === false && item.name.includes(district) === false && item.name.includes(portauth) === false && item.name.includes(sporttek) === false && item.name.includes(newera) === false && item.name.includes(ade) === false && item.name.includes(aec) === false && item.name.includes(ej) === false && item.name.includes(champ) === false && item.name.includes(champ) === false && item.name.includes(nv) === false) {
            msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
            newItems.push(bcResponse[i]);
          }
        }
      }

    } catch (err) {
      console.log('Error on productMsg: ', err);
    }

    await timeoutPromise(2000);

    console.log('Getting Variants..');

    try {
      varItems = await getVars(bcResponse);
    } catch (err) {
      console.log('Error on getVars: ', err);
    }

    console.log('Checking Variant Level..');

    try {

      if (!getItems.rows[0]) {
        //console.log('Item DB Empty!');
        for (let k = 0; k < varItems.length; k++) {

          if (varItems[k].inventory_level === 0) {
            let bcItemName = varItems[k].name;
            let bcItemSku = varItems[k].sku;
            bcItemId = varItems[k].id;
            let bcItemInv = varItems[k].inventory_level;
            msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Variant'), `);
            let variant = {
              name: bcItemName,
              sku: bcItemSku,
              id: bcItemId,
              inventory_tracking: varItems[k].inventory_tracking
            };
            newItems.push(variant);
          } else {
            //console.log('Variant not at 0 stock!');
          }
        }
      } else {

        for (let k = 0; k < varItems.length; k++) {


          bcItemId = varItems[k].id;
          let canInsert = true;

          for (let j = 0; j < getItems.rows.length; j++) {
            if (bcItemId === getItems.rows[j].id) {
              canInsert = false;
            }
          }

          if (varItems[k].inventory_level === 0 && canInsert === true) {
            let bcItemSku = varItems[k].sku;
            let bcItemId = varItems[k].id;
            let bcItemName = varItems[k].name;
            msg += (`('${bcItemName}', '${bcItemSku}', ${varItems[k].inventory_level}, ${bcItemId}, 'Variant'), `);
            let variant = {
              name: bcItemName,
              sku: bcItemSku,
              id: bcItemId,
              inventory_tracking: varItems[k].inventory_tracking
            };
            newItems.push(variant);
          } else {
            //console.log('Variant not at 0 stock!');
          }
        }
      }
    } catch (err) {
      console.log('Error on varMsg: ', err);
    }

    await timeoutPromise(4000);

    try {
      if (msg === '') {
        console.log('No new items!');
      } else {

        let newMsg = msg.slice(0, -2);

        const queryText = `INSERT INTO "item" (name, sku, inventory_level, id, level) VALUES ${newMsg};`;
        await pool
          .query(queryText)
      }
    } catch (err) {
      console.log('Error on insert: ', err);
    }

    await timeoutPromise(1000);

    try {
      console.log("We are about to get the item list");

      const queryText = `select * from "item" ORDER BY id DESC`;
      await pool
        .query(queryText)
    } catch (err) {
      console.log('Error on getItems: ', err);
    }

    try {
      if (!newItems[0]) {
        console.log('No Message Sent to slack!');
      } else {
        let slackText = `:warning: *NO STOCK NOTIFY!* :warning:\n\n<!channel>\n\n`;

        for (let i = 0; i < newItems.length; i++) {
          let itemTrack = newItems[i].inventory_tracking;
          if (itemTrack === 'none') {
            slackText += "*ITEM:* ```" + newItems[i].name + "``` has *Inventory Tracking* disabled! Enable Tracking *ASAP*!\n\n\n\n"
          } else if (newItems[i].sku) {
            slackText += "*ITEM:* ```" + newItems[i].name + "``` with *SKU:* ```" + newItems[i].sku + "``` is recently out of stock! Please look into this *ASAP*!\n\n\n\n"
          } else {
            slackText += "*ITEM:* ```" + newItems[i].name + "``` with *SKU:* ```" + "NO SKU or on the Product Level!" + "``` is recently out of stock! Please look into this *ASAP*!\n\n\n\n"
          }
        }

        (async () => {
          // See: https://api.slack.com/methods/chat.postMessage
          const res = await web.chat.postMessage({
            icon_emoji: ":warning:",
            channel: conversationId,
            text: `${slackText}`,
          });

          // `res` contains information about the posted message

          console.log("Message sent: ", res);
        })();
      }
    } catch (err) {
      console.log('Error on slack message: ', err);
    }
}


//Get Zero Stock Items & Notify
async function getItems() {

    let bcResponse = [];

    try {
      bcResponse = await getBCItems();
    } catch (err) {
      console.log('Error on getBCItems: ', err);
    }

    await timeoutPromise(1000);

    addItems(bcResponse);
}


//Get Zero Stock Items & Notify on Single Page
async function getItemsSinglePage(pageToUse) {

  let bcResponse = [];

  try {
    bcResponse = await getSingleBCPage(pageToUse);
  } catch (err) {
    console.log('Error on getBCItems: ', err);
  }

  await timeoutPromise(1000);

  addItems(bcResponse);
}


//Get All Variants of All Products
async function getVars(bcResponse) {

  let varItems = [];

    try {
      let i = 0;
      for (i = 0; i < bcResponse.length; i++) {
        if (bcResponse[i].inventory_tracking === 'variant') {
        let pusher = await eachVar(bcResponse, i);
        for (item of pusher) {

          const district = 'District';
          const portauth = 'Port Authority';
          const sporttek = 'Sport-Tek';
          const newera = 'New Era';
          const ade = 'Alternative Dodgeball Eco';
          const aec = 'Alternative';
          const ej = 'Eco-Jersey';
          const champ = 'Champion';
          const nv = 'Nike';
          const gildan = 'Gildan';
          const cc = 'COMFORT COLORS';
          const hanes = 'Hanes';
          const aa = 'American Apparel';
          const jer = 'JERZEES';
          const fotl = 'Fruit of the Loom';
          const anvil = 'Anvil';
          const bc = 'BELLA+CANVAS';
          const cs = 'CornerStone';
          const pac = 'Port & Company';
          const red = 'Red House';
          const rabbit = 'Rabbit Skins';
          const uni = 'Unisex';
          const rk = 'Red Kap';
          const ro = 'Russell Outdoors';
          const nl = 'Next Level';

          if (item.inventory_level === 0 && item.name.includes(ro) === false && item.name.includes(nl) === false && item.name.includes(rk) === false && item.name.includes(uni) === false && item.name.includes(rabbit) === false && item.name.includes(red) === false && item.name.includes(pac) === false && item.name.includes(cs) === false && item.name.includes(bc) === false && item.name.includes(anvil) === false && item.name.includes(fotl) === false && item.name.includes(jer) === false && item.name.includes(aa) === false && item.name.includes(hanes) === false && item.name.includes(cc) === false && item.name.includes(gildan) === false && item.name.includes(district) === false && item.name.includes(portauth) === false && item.name.includes(sporttek) === false && item.name.includes(newera) === false && item.name.includes(ade) === false && item.name.includes(aec) === false && item.name.includes(ej) === false && item.name.includes(champ) === false && item.name.includes(champ) === false && item.name.includes(nv) === false) {
        varItems.push({
          sku: item.sku,
          id: item.id,
          inventory_level: item.inventory_level,
          name: item.name,
          inventory_tracking: item.inventory_tracking,
        });
        //await timeoutPromise(5);
          }
         }
        }
      }
    } catch (err) {
      console.log('Error on makeVarArray: ', err);
    }

    return varItems;
}


async function eachVar(bcResponse, i) {
  try {
    let bcItemId = bcResponse[i].id;
    let bcItemTrack = bcResponse[i].inventory_tracking;
    let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');

    if (bcItemTrack === 'variant') {
      let getVar = [];

      getVar = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products/${bcItemId}/variants`,
          config
        )

      let varToPush = [];

     for (variant of getVar.data.data) {

      let varSku = variant.sku;
      let varId = variant.id;
      let varInv = variant.inventory_level;

      let pusher = {
        sku: varSku,
        id: varId,
        inventory_level: varInv,
        name: bcItemName,
        inventory_tracking: bcItemTrack,
      }

      varToPush.push(pusher);

     }

      return varToPush;

    }
  } catch (err) {
    console.log('Error on getVar: ', err);
  }
}


async function updateProducts(page) {

  let bcItems = [];

  bcItems = await getSingleBCPage(page);

  for (let i = 0 ; i < bcItems.length ; i++) {

     var data = "{\"is_condition_shown\":true}";

     var xhr = new XMLHttpRequest();
     xhr.withCredentials = true;

     xhr.addEventListener("readystatechange", function () {
       if (this.readyState === this.DONE) {
       }
     });

     xhr.open("PUT", `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products/${bcItems[i].id}`);
     xhr.setRequestHeader("accept", "application/json");
     xhr.setRequestHeader("x-auth-token", "13n6uxj2je2wbnc0vggmz8sqjl93d1d");

     xhr.send(data);
     console.log('yUH');
  }
}


// Auto Update Product
setInterval(() => {
  // set this to true to activate
  update = false;

  if (update) {

    pageToUse++;
    if (pageToUse > 28) {
      pageToUse = 1;
    }
    console.log(`Updating Items on page ${pageToUse}..`);
    update = false;
    updateProducts(pageToUse);
  }
}, 1000 * 60 * 480);


// Auto Restock Notify
setInterval(() => {
  // set this to true to activate
  stockNotify = true;

  if (stockNotify) {
    console.log('Checking for Stocked Items..');
    stockNotify = false;
    checkItems();

    async function checkItems(req, res) {
      
  let bcResponse = [];
  let varItems = [];
  let getItems = [];
  let stockedItems = [];
  let bcItemId;

  try {
    bcResponse = await getBCItems();
  } catch (err) {
    console.log('Error on getBCItems: ', err);
  }

await timeoutPromise(1000);

  try {
    const queryText = `select * from "item" WHERE reason <> 'clothing' ORDER BY id DESC`;
    await pool
      .query(queryText)
      .then((getResult) => {
        getItems = getResult;
      })
  } catch (err) {
    console.log('Error on getItems: ', err);
  }

await timeoutPromise(2000);

try {
  if (getItems.rows[0]) {
    for (let i = 0; i < bcResponse.length; i++) {
      let bcItemId = bcResponse[i].id;
      let bcItemSku = bcResponse[i].sku;
      let bcItemInv = bcResponse[i].inventory_level;
      for (let j = 0; j < getItems.rows.length; j++) {
        let itemId = getItems.rows[j].id;
        let itemSku = getItems.rows[j].sku;
        // console.log('BC: ', bcItemId);
        // console.log('Item: ', itemId);
        if (bcItemId === itemId && bcItemSku === itemSku && bcItemInv !== 0) {
          stockedItems.push(getItems.rows[j]);
       }
     }
   }
 }

} catch (err) {
  console.log('Error on getStocked: ', err);
}

  await timeoutPromise(8000);

  try {
  varItems = await getVars(bcResponse);
  } catch (err) {
    console.log('Error on getVars: ', err);
  }

  try {
      if (getItems.rows[0]) {
        for (let k = 0; k < varItems.length; k++) {

          bcItemId = varItems[k].id;
          let bcItemSku = varItems[k].sku;

          for (let j = 0; j < getItems.rows.length; j++) {
            let itemId = getItems.rows[j].id;
            let itemSku = getItems.rows[j].sku;

            if (bcItemId === itemId && bcItemSku === itemSku && varItems[k].inventory_level !== 0) {
              stockedItems.push(getItems.rows[j]);
            }
          }
        }
      }
  } catch (err) {
    console.log('Error on varMsg: ', err);
  }

  await timeoutPromise(12000);

try {
  for (item of stockedItems) {
    const queryText = `delete from "item" WHERE id = '${item.id}'`;
    await pool
      .query(queryText)
  }
} catch (err) {
  console.log('Error on delete: ', err);
}

    }
  }
}, 1000 * 60 * 13);


// Auto Reset Database (Not Dead Inventory)
setInterval(() => {
  // set this to true to activate
  resetNoStock = false;

  if (resetNoStock) {
    console.log('Resetting Database..');
    resetNoStock = false;
    resetDb();

    async function resetDb(req, res) {

let bcResponse = [];
let msg = '';
let bcItemId;
let varItems = [];
let getItems = [];

  try {
    bcResponse = await getBCItems();
  } catch (err) {
    console.log('Error on getBCItems: ', err);
    return res.status(500).send();
  }

await timeoutPromise(1000);


try {
  const queryText = `DELETE from "item" WHERE dead = false`;
  await pool
    .query(queryText)
    .then((deleteResult) => {
    })
} catch (err) {
  console.log('Error on deleteItems: ', err);
  return res.status(500).send();
}

await timeoutPromise(500);

try {
  const queryText = `select * from "item" ORDER BY id DESC`;
  await pool
    .query(queryText)
    .then((getResult) => {
      getItems = getResult;
    })
} catch (err) {
  console.log('Error on getItems: ', err);
  return res.status(500).send();
}

await timeoutPromise(2000);

try {
  if (!getItems.rows[0]) {
    console.log('Item DB Empty!');
    for (let i = 0; i < bcResponse.length; i++) {
      let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
      bcItemId = bcResponse[i].id;
      let bcItemSku = bcResponse[i].sku;
      let bcItemInv = bcResponse[i].inventory_level;
      //let bcItemTrack = bcResponse[i].inventory_tracking;

      if (bcItemInv === 0) {
        msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
      }
    }
  } else {
    for (let i = 0; i < bcResponse.length; i++) {
      bcItemId = bcResponse[i].id;
      let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
      let bcItemSku = bcResponse[i].sku;
      let bcItemInv = bcResponse[i].inventory_level;
      //let bcItemTrack = bcResponse[i].inventory_tracking;
      let canInsert = true;

      for (let j = 0; j < getItems.rows.length; j++) {
        if (bcItemId === getItems.rows[j].id) {
          canInsert = false;
        }
      }

      if (canInsert === true && bcItemInv === 0) {
        msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
      }
    }
  }

} catch (err) {
  console.log('Error on productMsg: ', err);
  return res.status(500).send();
}

await timeoutPromise(10000);

try {
  lupus(0, bcResponse.length, async function getVariants(i) {
    bcItemId = bcResponse[i].id;
    let bcItemTrack = bcResponse[i].inventory_tracking;

    if (bcItemTrack === 'variant') {
    let getVar = [];

    getVar = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products/${bcItemId}/variants`,
        config
      )


    let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
    let bcItemSku = bcResponse[i].sku;
    varItems = getVar.data.data;

    if (!getItems.rows[0]) {
      //console.log('Item DB Empty!');
      for (let k = 0; k < varItems.length; k++) {

        if (varItems[k].inventory_level === 0) {
          bcItemSku = varItems[k].sku;
          bcItemId = varItems[k].id;
          msg += (`('${bcItemName}', '${bcItemSku}', ${varItems[k].inventory_level}, ${bcItemId}, 'Variant'), `);
        } else {
          //console.log('Variant not at 0 stock!');
        }
      }
    } else {

      for (let k = 0; k < varItems.length; k++) {

        bcItemId = varItems[k].id;
        let canInsert = true;

        for (let j = 0; j < getItems.rows.length; j++) {
          if (bcItemId === getItems.rows[j].id) {
            canInsert = false;
          }
        }

        if (varItems[k].inventory_level === 0 && canInsert === true) {
          bcItemSku = varItems[k].sku;
          msg += (`('${bcItemName}', '${bcItemSku}', ${varItems[k].inventory_level}, ${bcItemId}, 'Variant'), `);
        } else {
          //console.log('Variant not at 0 stock!');
        }
      }
    }
   }
  })
} catch (err) {
  console.log('Error on varMsg: ', err);
  return res.status(500).send();
}

await timeoutPromise(12000);

try {
  if (msg === '') {
    console.log('No new items!');
  } else {

    let newMsg = msg.slice(0, -2);

    const queryText = `INSERT INTO "item" (name, sku, inventory_level, id, level) VALUES ${newMsg};`;
    await pool
      .query(queryText)
  }
} catch (err) {
  console.log('Error on insert: ', err);
  return res.status(500).send();
}

await timeoutPromise(3000);

try {
  console.log("We are about to get the item list");

  const queryText = `select * from "item" ORDER BY id DESC`;
  await pool
    .query(queryText)
    .then((selectResult) => {
      res.send(selectResult.rows);
    })
} catch (err) {
  console.log('Error on getItems: ', err);
  return res.status(500).send();
}


    }
  }
}, 1000 * 60 * 480);


// Auto No Stock Notify ALL PAGES
setInterval(() => {
  // set this to true to activate
  slackNotify = true;

  if (slackNotify) {
    console.log('running Slack Notify..');
    slackNotify = false;
    getItems();
 }
}, 1000 * 60 * 17);


// Auto No Stock Notify Single Page
setInterval(() => {
  // set this to true to activate
  getSinglePage = false;

  if (getSinglePage) {
    pageToUse++;
    if (pageToUse > 28) {
      pageToUse = 1;
    }
    console.log(`running Slack Notify on page ${pageToUse}..`);
    getSinglePage = false;
    getItemsSinglePage(pageToUse);
  }
}, 1000 * 60 * 5);


router.get("/items", async function getItems(req, res) {

  let bcResponse = [];
  let msg = '';
  let bcItemId;
  let varItems = [];
  let getItems = [];

  try {
    bcResponse = await getBCItems();
  } catch (err) {
    console.log('Error on getBCItems: ', err);
    return res.status(500).send();
  }

await timeoutPromise(500);

  console.log('Getting Products..');

  try {
    const queryText = `select * from "item" ORDER BY id DESC`;
    await pool
      .query(queryText)
      .then((getResult) => {
        getItems = getResult;
      })
  } catch (err) {
    console.log('Error on getItems: ', err);
    return res.status(500).send();
  }

  await timeoutPromise(500);
  console.log('Checking Product Level..');

  try {
    if (!getItems.rows[0]) {
      console.log('Item DB Empty!');
      for (let i = 0; i < bcResponse.length; i++) {
        let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
        bcItemId = bcResponse[i].id;
        let bcItemSku = bcResponse[i].sku;
        let bcItemInv = bcResponse[i].inventory_level;
        let bcItemTrack = bcResponse[i].inventory_tracking;

        const district = 'District';
        const portauth = 'Port Authority';
        const sporttek = 'Sport-Tek';
        const newera = 'New Era';
        const ade = 'Alternative Dodgeball Eco';
        const aec = 'Alternative';
        const ej = 'Eco-Jersey';
        const champ = 'Champion';
        const nv = 'Nike';
        const gildan = 'Gildan';
        const cc = 'COMFORT COLORS';
        const hanes = 'Hanes';
        const aa = 'American Apparel';
        const jer = 'JERZEES';
        const fotl = 'Fruit of the Loom';
        const anvil = 'Anvil';
        const bc = 'BELLA+CANVAS';
        const cs = 'CornerStone';
        const pac = 'Port & Company';
        const red = 'Red House';
        const rabbit = 'Rabbit Skins';
        const uni = 'Unisex';
        const rk = 'Red Kap';
        const ro = 'Russell Outdoors';
        const nl = 'Next Level';

        if (bcItemInv === 0 && bcItemTrack !== 'variant' && item.name.includes(nl) === false && item.name.includes(ro) === false && item.name.includes(rk) === false && item.name.includes(uni) === false && item.name.includes(rabbit) === false && item.name.includes(red) === false && item.name.includes(pac) === false && item.name.includes(cs) === false && item.name.includes(bc) === false && item.name.includes(anvil) === false && item.name.includes(fotl) === false && item.name.includes(jer) === false && item.name.includes(aa) === false && item.name.includes(hanes) === false && item.name.includes(cc) === false && item.name.includes(gildan) === false && item.name.includes(district) === false && item.name.includes(portauth) === false && item.name.includes(sporttek) === false && item.name.includes(newera) === false && item.name.includes(ade) === false && item.name.includes(aec) === false && item.name.includes(ej) === false && item.name.includes(champ) === false && item.name.includes(champ) === false && item.name.includes(nv) === false) {
        msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
        }
      }
    } else {
      for (let i = 0; i < bcResponse.length; i++) {
        bcItemId = bcResponse[i].id;
        let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
        let bcItemSku = bcResponse[i].sku;
        let bcItemInv = bcResponse[i].inventory_level;
        let bcItemTrack = bcResponse[i].inventory_tracking;
        let canInsert = true;

        for (let j = 0; j < getItems.rows.length; j++) {
          if (bcItemId === getItems.rows[j].id) {
            canInsert = false;
          }
        }

        const district = 'District';
        const portauth = 'Port Authority';
        const sporttek = 'Sport-Tek';
        const newera = 'New Era';
        const ade = 'Alternative Dodgeball Eco';
        const aec = 'Alternative Eco-Fleece';
        const ej = 'Eco-Jersey';
        const champ = 'Champion';
        const nv = 'Nike';
        const gildan = 'Gildan';
        const cc = 'COMFORT COLORS';
        const hanes = 'Hanes';
        const aa = 'American Apparel';
        const jer = 'JERZEES';
        const fotl = 'Fruit of the Loom';
        const anvil = 'Anvil';
        const bc = 'BELLA+CANVAS';
        const cs = 'CornerStone';
        const pac = 'Port & Company';
        const red = 'Red House';
        const rabbit = 'Rabbit Skins';
        const uni = 'Unisex';
        const rk = 'Red Kap';
        const ro = 'Russell Outdoors';
        const nl = 'Next Level';

        if (canInsert === true && bcItemInv === 0 && bcItemTrack !== 'variant' && item.name.includes(nl) === false && item.name.includes(ro) === false && item.name.includes(rk) === false && item.name.includes(uni) === false && item.name.includes(rabbit) === false && item.name.includes(red) === false && item.name.includes(pac) === false && item.name.includes(cs) === false && item.name.includes(bc) === false && item.name.includes(anvil) === false && item.name.includes(fotl) === false && item.name.includes(jer) === false && item.name.includes(aa) === false && item.name.includes(hanes) === false && item.name.includes(cc) === false && item.name.includes(gildan) === false && item.name.includes(district) === false && item.name.includes(portauth) === false && item.name.includes(sporttek) === false && item.name.includes(newera) === false && item.name.includes(ade) === false && item.name.includes(aec) === false && item.name.includes(ej) === false && item.name.includes(champ) === false && item.name.includes(champ) === false && item.name.includes(nv) === false) {
          msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
        }
      }
    }

  } catch (err) {
    console.log('Error on productMsg: ', err);
    return res.status(500).send();
  }

  await timeoutPromise(2000);

     console.log('Getting Variants..');

    try {
      varItems = await getVars(bcResponse);
      } catch (err) {
        console.log('Error on getVars: ', err);
      }

      console.log('Checking Variant Level..');

    try {
      //console.log(varItems);
        if (!getItems.rows[0]) {
          for (let k = 0; k < varItems.length; k++) {
            if (varItems[k].inventory_level === 0) {
              let bcItemName = varItems[k].name;
              let bcItemSku = varItems[k].sku;
              bcItemId = varItems[k].id;
              let bcItemInv = varItems[k].inventory_level;
              msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Variant'), `);
            } else {
              //console.log('Variant not at 0 stock!');
            }
          }
        } else {
          for (let k = 0; k < varItems.length; k++) {
            bcItemId = varItems[k].id;
            let canInsert = true;

            for (let j = 0; j < getItems.rows.length; j++) {
              if (bcItemId === getItems.rows[j].id) {
                canInsert = false;
              }
            }

            if (varItems[k].inventory_level === 0 && canInsert === true) {
              let bcItemSku = varItems[k].sku;
              let bcItemId = varItems[k].id;
              let bcItemName = varItems[k].name;
              msg += (`('${bcItemName}', '${bcItemSku}', ${varItems[k].inventory_level}, ${bcItemId}, 'Variant'), `);
            } else {
              //console.log('Variant not at 0 stock!');
            }
          }
        }
    } catch (err) {
      console.log('Error on varMsg: ', err);
    }

  await timeoutPromise(3000);

  try {
    if (msg === '') {
      console.log('No new items!');
    } else {

      let newMsg = msg.slice(0, -2);

      const queryText = `INSERT INTO "item" (name, sku, inventory_level, id, level) VALUES ${newMsg};`;
      await pool
        .query(queryText)
    }
  } catch (err) {
    console.log('Error on insert: ', err);
    return res.status(500).send();
  }

  await timeoutPromise(1000);

  try {
    console.log("We are about to get the item list");

    const queryText = `select * from "item" ORDER BY id DESC`;
    await pool
      .query(queryText)
      .then((selectResult) => {
        res.send(selectResult.rows);
      })
  } catch (err) {
    console.log('Error on getItems: ', err);
    return res.status(500).send();
  }

});

router.get("/getitems", (req, res) => {
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
});

router.delete("/items/:id", async function (req, res) {
  console.log("We are deleting items as dead with id:", req.params.id);
  const ids = req.params.id;

  let items = [];
  let itemToPush = '';
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] !== ',') {
      itemToPush += (ids[i]);
    }
    if (ids[i] === ',') {
      items.push(itemToPush);
      itemToPush = '';
    }
  }
  items.push(itemToPush);
  itemToPush = '';
  
  try {
    for (item of items) {
      const queryText = `delete from "item" WHERE id = ${item}`;
      await pool
        .query(queryText)
    }
  } catch (err) {
    console.log('Error on delete: ', err);
    return res.status(500).send();
  }

  
  try {
    const queryText = `select * from "item" ORDER BY id DESC`;
    await pool
      .query(queryText)
      .then((selectResult) => {
        res.send(selectResult.rows);
      })
      .catch((error) => {
        console.log(`Error on item query ${error}`);
        res.sendStatus(500);
      });
  } catch (err) {
    console.log('Error on Get: ', err);
    return res.status(500).send();
  }
 
    
});

router.put("/items/:id", async function (req, res) {
  console.log("We are updating items as dead with id:", req.params.id);
  const ids = req.params.id;

  let items = [];
  let itemToPush = '';
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] !== ',') {
      itemToPush += (ids[i]);
    } if (ids[i] === ',') {
      items.push(itemToPush);
      itemToPush = '';
    }
  }
  items.push(itemToPush);
  itemToPush = '';

  try {
    for (item of items) {
      console.log(item);
    const queryText = `UPDATE "item" SET dead = true WHERE id = ${item}`;
    await pool
      .query(queryText)
    }
  } catch (err) {
    console.log('Error on update: ', err);
    return res.status(500).send();
  }
  
  try {
    console.log("We are about to get the item list");

    const queryText = `select * from "item" ORDER BY id DESC`;
    await pool
      .query(queryText)
      .then((selectResult) => {
        res.send(selectResult.rows);
      })
      .catch((error) => {
        console.log(`Error on item query ${error}`);
        res.sendStatus(500);
      });
  } catch (err) {
    console.log('Error on Get: ', err);
    return res.status(500).send();
  }
    
});

router.put("/deadItems/:id", (req, res) => {
  console.log("We are updating an item as not dead with id:", req.params.id);
  const id = req.params.id;

  const queryText = `UPDATE "item" SET dead = false WHERE id = $1`;
  pool
    .query(queryText, [id])
    .then((updateResult) => {
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
});
                                            
router.put("/updateReason", (req, res) => {
  console.log(req.body.payload);
  const payload = req.body.payload;
  const id = payload.id
  const reason = payload.reason;
  console.log("We are updating a reason on item with id:", id);

  const queryText = `UPDATE "item" SET reason = $1 WHERE id = $2`;
  pool
    .query(queryText, [reason, id])
    .then((updateResult) => {
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
});


module.exports = router;
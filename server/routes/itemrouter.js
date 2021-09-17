const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require("axios");
var lupus = require('lupus');
const { WebClient } = require("@slack/web-api");
const { createEventAdapter } = require("@slack/events-api");
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);

let config = {
  //authenticate Big Commerce API
  headers: {
    "X-Auth-Client": process.env.BG_AUTH_CLIENT,
    "X-Auth-Token": process.env.BG_AUTH_TOKEN,
  },
};

let slackNotify = false;

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

const conversationId = "C02EV4JKSLA";

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

setInterval(() => {
  slackNotify = true;

  if (slackNotify) {
    console.log('running Slack Notify..');
    slackNotify = false;
    getItems();

  async function getItems(req, res) {
    let bcResponse1;
    let bcResponse2;
    let bcResponse3;
    let bcResponse4;
    let bcResponse5;
    let bcResponse6;
    let bcResponse7;
    let bcResponse8;
    let bcResponse9;
    let bcResponse = [];
    let msg = '';
    let bcItemId;
    let varItems;
    let getItems = [];
    let newItems = [];

    function timeoutPromise(interval) {
      return new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve("done");
        }, interval);
      });
    };


    try {
      bcResponse1 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=1`,
          config
        )
    } catch (err) {
      console.log('Error on Get1: ', err);
    }

    try {
      bcResponse2 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=2`,
          config
        )
    } catch (err) {
      console.log('Error on Get2: ', err);
    }

    try {
      bcResponse3 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=3`,
          config
        )
    } catch (err) {
      console.log('Error on Get3: ', err);
    }

    try {
      bcResponse3 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=3`,
          config
        )
    } catch (err) {
      console.log('Error on Get3: ', err);
    }

    try {
      bcResponse4 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=4`,
          config
        )
    } catch (err) {
      console.log('Error on Get4: ', err);
    }

    try {
      bcResponse5 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=5`,
          config
        )
    } catch (err) {
      console.log('Error on Get5: ', err);
    }

    try {
      bcResponse6 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=6`,
          config
        )
    } catch (err) {
      console.log('Error on Get6: ', err);
    }

    try {
      bcResponse7 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=7`,
          config
        )
    } catch (err) {
      console.log('Error on Get7: ', err);
    }

    try {
      bcResponse8 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=8`,
          config
        )
    } catch (err) {
      console.log('Error on Get8: ', err);
    }

    try {
      bcResponse9 = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=9`,
          config
        )
    } catch (err) {
      console.log('Error on Get9: ', err);
    }

    try {
      for (item of bcResponse1.data.data) {
        bcResponse.push(item);
      }
      for (item of bcResponse2.data.data) {
        bcResponse.push(item);
      }
      for (item of bcResponse3.data.data) {
        bcResponse.push(item);
      }
      for (item of bcResponse4.data.data) {
        bcResponse.push(item);
      }
      for (item of bcResponse5.data.data) {
        bcResponse.push(item);
      }
      for (item of bcResponse6.data.data) {
        bcResponse.push(item);
      }
      for (item of bcResponse7.data.data) {
        bcResponse.push(item);
      }
      for (item of bcResponse8.data.data) {
        bcResponse.push(item);
      }
      for (item of bcResponse9.data.data) {
        bcResponse.push(item);
      }
    } catch (err) {
      console.log('Error on bcCreate: ', err);
    }

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

    await timeoutPromise(1000);

    try {
      if (!getItems.rows[1]) {
        console.log('Item DB Empty!');
        for (let i = 0; i < bcResponse.length; i++) {
          let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
          let bcItemId = bcResponse[i].id;
          let bcItemSku = bcResponse[i].sku;
          let bcItemInv = bcResponse[i].inventory_level;

          msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
          newItems.push(bcResponse[i]);
        }
      } else {
        for (let i = 0; i < bcResponse.length; i++) {
          let bcItemId = bcResponse[i].id;
          let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
          let bcItemSku = bcResponse[i].sku;
          let bcItemInv = bcResponse[i].inventory_level;
          let canInsert = true;

          for (let j = 0; j < getItems.rows.length; j++) {
            if (bcItemId === getItems.rows[j].id) {
              canInsert = false;
            }
          }

          if (canInsert === true) {
            msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
            newItems.push(bcResponse[i]);
          }
        }
      }

    } catch (err) {
      console.log('Error on productMsg: ', err);
    }

    await timeoutPromise(2000);

    try {
      lupus(0, bcResponse.length, async function getVariants(i) {
        bcItemId = bcResponse[i].id;

        getVar = await axios
          .get(
            `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products/${bcItemId}/variants`,
            config
          )


        let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
        bcItemId = bcResponse[i].id;
        let bcItemSku = bcResponse[i].sku;
        let bcItemInv = bcResponse[i].inventory_level;
        varItems = getVar.data.data;

        if (!getItems.rows[1]) {
          //console.log('Item DB Empty!');
          for (let k = 0; k < varItems.length; k++) {

            if (varItems[k].inventory_level === 0) {
              bcItemSku = varItems[k].sku;
              bcItemId = varItems[k].id;
              msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Variant'), `);
              let variant = {
                name: bcItemName,
                sku: bcItemSku,
                id: bcItemId
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
              bcItemSku = varItems[k].sku;
              bcItemId = varItems[k].id;
              msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Variant'), `);
              let variant = {
                name: bcItemName,
                sku: bcItemSku,
                id: bcItemId
              };
              newItems.push(variant);
            } else {
              //console.log('Variant not at 0 stock!');
            }
          }
        }
      })
    } catch (err) {
      console.log('Error on varMsg: ', err);
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
    }

    await timeoutPromise(3000);

    try {
      console.log("We are about to get the item list");

      const queryText = `select * from "item" ORDER BY id DESC`;
      await pool
        .query(queryText)
    } catch (err) {
      console.log('Error on getItems: ', err);
    }

    try {
      if (!newItems[1]) {
        console.log('No Message Sent to slack!');
      } else {
      let slackText = `:warning: *NO STOCK NOTIFY!* :warning:\n\n<!channel>\n\n`;

      for (let i = 0; i < newItems.length; i++) {
        if (newItems[i].sku) {
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
}
}, 1000 * 60 * 15);

router.get("/items", async function getItems (req, res) {
  let bcResponse1;
  let bcResponse2;
  let bcResponse3;
  let bcResponse4;
  let bcResponse5;
  let bcResponse6;
  let bcResponse7;
  let bcResponse8;
  let bcResponse9;
  let bcResponse = [];
  let msg = '';
  let bcItemId;
  let varItems;
  let getItems = [];

  function timeoutPromise(interval) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("done");
      }, interval);
    });
  };

  
  try {
    bcResponse1 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=1`,
        config
      )
  } catch (err) {
    console.log('Error on Get1: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse2 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=2`,
        config
      )
  } catch (err) {
    console.log('Error on Get2: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse3 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=3`,
        config
      )
  } catch (err) {
    console.log('Error on Get3: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse3 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=3`,
        config
      )
  } catch (err) {
    console.log('Error on Get3: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse4 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=4`,
        config
      )
  } catch (err) {
    console.log('Error on Get4: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse5 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=5`,
        config
      )
  } catch (err) {
    console.log('Error on Get5: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse6 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=6`,
        config
      )
  } catch (err) {
    console.log('Error on Get6: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse7 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=7`,
        config
      )
  } catch (err) {
    console.log('Error on Get7: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse8 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=8`,
        config
      )
  } catch (err) {
    console.log('Error on Get8: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse9 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0&limit=250&page=9`,
        config
      )
  } catch (err) {
    console.log('Error on Get9: ', err);
    return res.status(500).send();
  }

  try {
    for (item of bcResponse1.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse2.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse3.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse4.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse5.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse6.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse7.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse8.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse9.data.data) {
      bcResponse.push(item);
    }
} catch (err) {
  console.log('Error on bcCreate: ', err);
  return res.status(500).send();
}

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

await timeoutPromise(1000);

try {
  if (!getItems.rows[1]) {
    console.log('Item DB Empty!');
    for (let i = 0; i < bcResponse.length; i++) {
      let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
      let bcItemId = bcResponse[i].id;
      let bcItemSku = bcResponse[i].sku;
      let bcItemInv = bcResponse[i].inventory_level;
      
      msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
    }
  } else {  
    for (let i = 0; i < bcResponse.length; i++) {
      let bcItemId = bcResponse[i].id;
      let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
      let bcItemSku = bcResponse[i].sku;
      let bcItemInv = bcResponse[i].inventory_level;
      let canInsert = true;

      for (let j = 0; j < getItems.rows.length; j++) {
      if (bcItemId === getItems.rows[j].id) {
        canInsert = false;
      }
    }

      if (canInsert === true) {
      msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
      }
     }
    }
   
  } catch (err) {
    console.log('Error on productMsg: ', err);
    return res.status(500).send();
}

await timeoutPromise(2000);

try {
  lupus(0, bcResponse.length, async function getVariants (i) {
    bcItemId = bcResponse[i].id;
  
    getVar = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products/${bcItemId}/variants`,
        config
      )


         let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
         bcItemId = bcResponse[i].id;
         let bcItemSku = bcResponse[i].sku;
         let bcItemInv = bcResponse[i].inventory_level;
         varItems = getVar.data.data;

        if (!getItems.rows[1]) {
          //console.log('Item DB Empty!');
          for (let k = 0; k < varItems.length; k++) {

            if (varItems[k].inventory_level === 0) {
              bcItemSku = varItems[k].sku;
              bcItemId = varItems[k].id;
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
             bcItemSku = varItems[k].sku;
             msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Variant'), `);
           } else {
             //console.log('Variant not at 0 stock!');
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

router.delete("/items/:id", (req, res) => {
  console.log("We are about to get the item list");
  const id = req.params.id;

  const queryText = `delete from "item" WHERE id = $1`;
  pool
    .query(queryText, [id])
    .then((deleteResult) => {
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

router.put("/items/:id", (req, res) => {
  console.log("We are updating an item as dead with id:", req.params.id);
  const id = req.params.id;

  const queryText = `UPDATE "item" SET dead = true WHERE id = $1`;
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
                                            


module.exports = router;
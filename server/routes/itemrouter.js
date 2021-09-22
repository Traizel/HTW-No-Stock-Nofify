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
let stockNotify = false;
let resetNoStock = false;

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

const conversationId = "C02EV4JKSLA";

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);


// Auto Restock Notify
setInterval(() => {
  // set this to true to activate
  stockNotify = false;

  if (stockNotify) {
    console.log('Checking for Stocked Items..');
    stockNotify = false;
    checkItems();

    async function checkItems(req, res) {
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
  let varItems;
  let getItems = [];
  let stockedItems = [];

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
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=1`,
        config
      )
  } catch (err) {
    console.log('Error on Get1: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse2 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=2`,
        config
      )
  } catch (err) {
    console.log('Error on Get2: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse3 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=3`,
        config
      )
  } catch (err) {
    console.log('Error on Get3: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse3 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=3`,
        config
      )
  } catch (err) {
    console.log('Error on Get3: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse4 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=4`,
        config
      )
  } catch (err) {
    console.log('Error on Get4: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse5 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=5`,
        config
      )
  } catch (err) {
    console.log('Error on Get5: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse6 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=6`,
        config
      )
  } catch (err) {
    console.log('Error on Get6: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse7 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=7`,
        config
      )
  } catch (err) {
    console.log('Error on Get7: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse8 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=8`,
        config
      )
  } catch (err) {
    console.log('Error on Get8: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse9 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=9`,
        config
      )
  } catch (err) {
    console.log('Error on Get9: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse10 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=10`,
        config
      )
  } catch (err) {
    console.log('Error on Get10: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse11 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=11`,
        config
      )
  } catch (err) {
    console.log('Error on Get11: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse12 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=12`,
        config
      )
  } catch (err) {
    console.log('Error on Get12: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse13 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=13`,
        config
      )
  } catch (err) {
    console.log('Error on Get13: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse14 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=14`,
        config
      )
  } catch (err) {
    console.log('Error on Get14: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse15 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=15`,
        config
      )
  } catch (err) {
    console.log('Error on Get15: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse16 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=16`,
        config
      )
  } catch (err) {
    console.log('Error on Get16: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse17 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=17`,
        config
      )
  } catch (err) {
    console.log('Error on Get17: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse18 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=18`,
        config
      )
  } catch (err) {
    console.log('Error on Get18: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse19 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=19`,
        config
      )
  } catch (err) {
    console.log('Error on Get19: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse20 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=20`,
        config
      )
  } catch (err) {
    console.log('Error on Get20: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse21 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=21`,
        config
      )
  } catch (err) {
    console.log('Error on Get21: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse22 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=22`,
        config
      )
  } catch (err) {
    console.log('Error on Get22: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse23 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=23`,
        config
      )
  } catch (err) {
    console.log('Error on Get23: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse24 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=24`,
        config
      )
  } catch (err) {
    console.log('Error on Get24: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse25 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=25`,
        config
      )
  } catch (err) {
    console.log('Error on Get25: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse26 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=26`,
        config
      )
  } catch (err) {
    console.log('Error on Get26: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse27 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=27`,
        config
      )
  } catch (err) {
    console.log('Error on Get27: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse28 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=28`,
        config
      )
  } catch (err) {
    console.log('Error on Get28: ', err);
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
    for (item of bcResponse10.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse11.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse12.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse13.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse14.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse15.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse16.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse17.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse18.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse19.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse20.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse21.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse22.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse23.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse24.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse25.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse26.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse27.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse28.data.data) {
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
  }

  await timeoutPromise(2000);

try {
  if (!getItems.rows[0]) {
    console.log('Item DB Empty!');
  } else {
    for (let i = 0; i < bcResponse.length; i++) {
      if (bcResponse[i].id) {
      let bcItemId = bcResponse[i].id;
      let bcItemInv = bcResponse[i].inventory_level;
      for (let j = 0; j < getItems.rows.length; j++) {
        if (getItems.rows[i].id) {
        let itemId = getItems.rows[i].id;
        // console.log('BC: ', bcItemId);
        // console.log('Item: ', itemId);
        if (bcItemId === itemId && bcItemInv !== 0) {
          stockedItems.push(getItems.rows[i]);
       }
      }
     }
    }
   }
  }

} catch (err) {
  console.log('Error on getStocked: ', err);
}

  await timeoutPromise(8000);

  try {
    lupus(0, bcResponse.length, async function getVariants(i) {

      if (bcResponse[i].id) {
      let bcItemId = bcResponse[i].id;

      getVar = await axios
        .get(
          `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products/${bcItemId}/variants`,
          config
        )

      let bcItemInv = bcResponse[i].inventory_level;
      varItems = getVar.data.data;

      if (getItems.rows[0]) {

        for (let k = 0; k < varItems.length; k++) {

          let bcItemId = varItems[k].id;

          for (let j = 0; j < getItems.rows.length; j++) {
            let itemId = getItems.rows[j].id;
            if (bcItemId === itemId && bcItemInv !== 0) {
              stockedItems.push(getItems.rows[j]);
            }
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
  if (!stockedItems[0]) {
    console.log('No Message Sent to slack!');
  } else {
    let slackText = `:white_check_mark: *RESTOCK NOTIFY!* :white_check_mark:\n\n`;

    for (let i = 0; i < stockedItems.length; i++) {
      if (stockedItems[i].sku) {
        slackText += "*ITEM:* ```" + stockedItems[i].name + "``` with *SKU:* ```" + stockedItems[i].sku + "``` has been restocked and removed from *No Stock Notify*!\n\n\n\n"
      } else {
        slackText += "*ITEM:* ```" + stockedItems[i].name + "``` with *SKU:* ```" + "NO SKU or on the Product Level!" + "``` has been restocked and removed from *No Stock Notify*!\n\n\n\n"
      }
    }

    (async () => {
      // See: https://api.slack.com/methods/chat.postMessage
      const res = await web.chat.postMessage({
        icon_emoji: ":white_check_mark:",
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

await timeoutPromise(3000);

try {
  for (item of stockedItems) {
    const queryText = `delete from "item" WHERE id = '${item.id}'`;
    await pool
      .query(queryText)
  }
} catch (err) {
  console.log('Error on delete: ', err);
  return res.status(500).send();
}

    }
  }
}, 1000 * 60 * 480);



// Auto Reset Database (Not Dead Inventory)
setInterval(() => {
  // set this to true to activate
  resetNoStock = true;

  if (resetNoStock) {
    console.log('Resetting Database..');
    resetNoStock = false;
    resetDb();

    async function resetDb(req, res) {
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
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=1`,
      config
    )
} catch (err) {
  console.log('Error on Get1: ', err);
  return res.status(500).send();
}

try {
  bcResponse2 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=2`,
      config
    )
} catch (err) {
  console.log('Error on Get2: ', err);
  return res.status(500).send();
}

try {
  bcResponse3 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=3`,
      config
    )
} catch (err) {
  console.log('Error on Get3: ', err);
  return res.status(500).send();
}

try {
  bcResponse3 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=3`,
      config
    )
} catch (err) {
  console.log('Error on Get3: ', err);
  return res.status(500).send();
}

try {
  bcResponse4 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=4`,
      config
    )
} catch (err) {
  console.log('Error on Get4: ', err);
  return res.status(500).send();
}

try {
  bcResponse5 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=5`,
      config
    )
} catch (err) {
  console.log('Error on Get5: ', err);
  return res.status(500).send();
}

try {
  bcResponse6 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=6`,
      config
    )
} catch (err) {
  console.log('Error on Get6: ', err);
  return res.status(500).send();
}

try {
  bcResponse7 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=7`,
      config
    )
} catch (err) {
  console.log('Error on Get7: ', err);
  return res.status(500).send();
}

try {
  bcResponse8 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=8`,
      config
    )
} catch (err) {
  console.log('Error on Get8: ', err);
  return res.status(500).send();
}

try {
  bcResponse9 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=9`,
      config
    )
} catch (err) {
  console.log('Error on Get9: ', err);
  return res.status(500).send();
}

try {
  bcResponse10 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=10`,
      config
    )
} catch (err) {
  console.log('Error on Get10: ', err);
  return res.status(500).send();
}

try {
  bcResponse11 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=11`,
      config
    )
} catch (err) {
  console.log('Error on Get11: ', err);
  return res.status(500).send();
}

try {
  bcResponse12 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=12`,
      config
    )
} catch (err) {
  console.log('Error on Get12: ', err);
  return res.status(500).send();
}

try {
  bcResponse13 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=13`,
      config
    )
} catch (err) {
  console.log('Error on Get13: ', err);
  return res.status(500).send();
}

try {
  bcResponse14 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=14`,
      config
    )
} catch (err) {
  console.log('Error on Get14: ', err);
  return res.status(500).send();
}

try {
  bcResponse15 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=15`,
      config
    )
} catch (err) {
  console.log('Error on Get15: ', err);
  return res.status(500).send();
}

try {
  bcResponse16 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=16`,
      config
    )
} catch (err) {
  console.log('Error on Get16: ', err);
  return res.status(500).send();
}

try {
  bcResponse17 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=17`,
      config
    )
} catch (err) {
  console.log('Error on Get17: ', err);
  return res.status(500).send();
}

try {
  bcResponse18 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=18`,
      config
    )
} catch (err) {
  console.log('Error on Get18: ', err);
  return res.status(500).send();
}

try {
  bcResponse19 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=19`,
      config
    )
} catch (err) {
  console.log('Error on Get19: ', err);
  return res.status(500).send();
}

try {
  bcResponse20 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=20`,
      config
    )
} catch (err) {
  console.log('Error on Get20: ', err);
  return res.status(500).send();
}

try {
  bcResponse21 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=21`,
      config
    )
} catch (err) {
  console.log('Error on Get21: ', err);
  return res.status(500).send();
}

try {
  bcResponse22 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=22`,
      config
    )
} catch (err) {
  console.log('Error on Get22: ', err);
  return res.status(500).send();
}

try {
  bcResponse23 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=23`,
      config
    )
} catch (err) {
  console.log('Error on Get23: ', err);
  return res.status(500).send();
}

try {
  bcResponse24 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=24`,
      config
    )
} catch (err) {
  console.log('Error on Get24: ', err);
  return res.status(500).send();
}

try {
  bcResponse25 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=25`,
      config
    )
} catch (err) {
  console.log('Error on Get25: ', err);
  return res.status(500).send();
}

try {
  bcResponse26 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=26`,
      config
    )
} catch (err) {
  console.log('Error on Get26: ', err);
  return res.status(500).send();
}

try {
  bcResponse27 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=27`,
      config
    )
} catch (err) {
  console.log('Error on Get27: ', err);
  return res.status(500).send();
}

try {
  bcResponse28 = await axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=28`,
      config
    )
} catch (err) {
  console.log('Error on Get28: ', err);
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
  for (item of bcResponse10.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse11.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse12.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse13.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse14.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse15.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse16.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse17.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse18.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse19.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse20.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse21.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse22.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse23.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse24.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse25.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse26.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse27.data.data) {
    bcResponse.push(item);
  }
  for (item of bcResponse28.data.data) {
    bcResponse.push(item);
  }
} catch (err) {
  console.log('Error on bcCreate: ', err);
  return res.status(500).send();
}

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
      let bcItemId = bcResponse[i].id;
      let bcItemSku = bcResponse[i].sku;
      let bcItemInv = bcResponse[i].inventory_level;

      if (bcItemInv === 0) {
        msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
      }
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

    if (!getItems.rows[0]) {
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


    }
  }
}, 1000 * 60 * 480);



// Auto No Stock Notify
setInterval(() => {
  // set this to true to activate
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
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=1`,
        config
      )
  } catch (err) {
    console.log('Error on Get1: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse2 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=2`,
        config
      )
  } catch (err) {
    console.log('Error on Get2: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse3 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=3`,
        config
      )
  } catch (err) {
    console.log('Error on Get3: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse3 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=3`,
        config
      )
  } catch (err) {
    console.log('Error on Get3: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse4 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=4`,
        config
      )
  } catch (err) {
    console.log('Error on Get4: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse5 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=5`,
        config
      )
  } catch (err) {
    console.log('Error on Get5: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse6 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=6`,
        config
      )
  } catch (err) {
    console.log('Error on Get6: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse7 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=7`,
        config
      )
  } catch (err) {
    console.log('Error on Get7: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse8 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=8`,
        config
      )
  } catch (err) {
    console.log('Error on Get8: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse9 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=9`,
        config
      )
  } catch (err) {
    console.log('Error on Get9: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse10 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=10`,
        config
      )
  } catch (err) {
    console.log('Error on Get10: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse11 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=11`,
        config
      )
  } catch (err) {
    console.log('Error on Get11: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse12 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=12`,
        config
      )
  } catch (err) {
    console.log('Error on Get12: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse13 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=13`,
        config
      )
  } catch (err) {
    console.log('Error on Get13: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse14 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=14`,
        config
      )
  } catch (err) {
    console.log('Error on Get14: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse15 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=15`,
        config
      )
  } catch (err) {
    console.log('Error on Get15: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse16 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=16`,
        config
      )
  } catch (err) {
    console.log('Error on Get16: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse17 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=17`,
        config
      )
  } catch (err) {
    console.log('Error on Get17: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse18 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=18`,
        config
      )
  } catch (err) {
    console.log('Error on Get18: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse19 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=19`,
        config
      )
  } catch (err) {
    console.log('Error on Get19: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse20 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=20`,
        config
      )
  } catch (err) {
    console.log('Error on Get20: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse21 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=21`,
        config
      )
  } catch (err) {
    console.log('Error on Get21: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse22 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=22`,
        config
      )
  } catch (err) {
    console.log('Error on Get22: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse23 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=23`,
        config
      )
  } catch (err) {
    console.log('Error on Get23: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse24 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=24`,
        config
      )
  } catch (err) {
    console.log('Error on Get24: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse25 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=25`,
        config
      )
  } catch (err) {
    console.log('Error on Get25: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse26 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=26`,
        config
      )
  } catch (err) {
    console.log('Error on Get26: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse27 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=27`,
        config
      )
  } catch (err) {
    console.log('Error on Get27: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse28 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=28`,
        config
      )
  } catch (err) {
    console.log('Error on Get28: ', err);
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
    for (item of bcResponse10.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse11.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse12.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse13.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse14.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse15.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse16.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse17.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse18.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse19.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse20.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse21.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse22.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse23.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse24.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse25.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse26.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse27.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse28.data.data) {
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
    }

    await timeoutPromise(2000);

    try {
      if (!getItems.rows[0]) {
        console.log('Item DB Empty!');
        for (let i = 0; i < bcResponse.length; i++) {
          let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
          let bcItemId = bcResponse[i].id;
          let bcItemSku = bcResponse[i].sku;
          let bcItemInv = bcResponse[i].inventory_level;

          if (bcItemInv === 0) {
            msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
            newItems.push(bcResponse[i]);
          }
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

          if (canInsert === true && bcItemInv === 0) {
            msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
            newItems.push(bcResponse[i]);
          }
        }
      }

    } catch (err) {
      console.log('Error on productMsg: ', err);
    }

    await timeoutPromise(10000);

    try {
      lupus(0, bcResponse.length, async function getVariants(i) {
        let bcItemId = bcResponse[i].id;
        let bcItemTrack = bcResponse[i].inventory_tracking;

        if (bcItemTrack === 'variant') {

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

        if (!getItems.rows[0]) {
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
      if (!newItems[0]) {
        console.log('No Message Sent to slack!');
      } else {
      let slackText = `:warning: *NO STOCK NOTIFY!* :warning:\n\n<!channel>\n\n`;

      for (let i = 0; i < newItems.length; i++) {
        let itemTrack = newItems[i].inventory_tracking;
        if (itemTrack === 'none') {
        slackText += "*ITEM:* ```" + newItems[i].name + "``` with *SKU:* ```" + newItems[i].sku + "``` has *Inventory Tracking* disabled! Enable Tracking *ASAP*!\n\n\n\n"
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
}
}, 1000 * 60 * 15);



router.get("/items", async function getItems(req, res) {
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
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=1`,
        config
      )
  } catch (err) {
    console.log('Error on Get1: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse2 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=2`,
        config
      )
  } catch (err) {
    console.log('Error on Get2: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse3 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=3`,
        config
      )
  } catch (err) {
    console.log('Error on Get3: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse3 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=3`,
        config
      )
  } catch (err) {
    console.log('Error on Get3: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse4 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=4`,
        config
      )
  } catch (err) {
    console.log('Error on Get4: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse5 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=5`,
        config
      )
  } catch (err) {
    console.log('Error on Get5: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse6 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=6`,
        config
      )
  } catch (err) {
    console.log('Error on Get6: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse7 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=7`,
        config
      )
  } catch (err) {
    console.log('Error on Get7: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse8 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=8`,
        config
      )
  } catch (err) {
    console.log('Error on Get8: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse9 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=9`,
        config
      )
  } catch (err) {
    console.log('Error on Get9: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse10 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=10`,
        config
      )
  } catch (err) {
    console.log('Error on Get10: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse11 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=11`,
        config
      )
  } catch (err) {
    console.log('Error on Get11: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse12 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=12`,
        config
      )
  } catch (err) {
    console.log('Error on Get12: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse13 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=13`,
        config
      )
  } catch (err) {
    console.log('Error on Get13: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse14 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=14`,
        config
      )
  } catch (err) {
    console.log('Error on Get14: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse15 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=15`,
        config
      )
  } catch (err) {
    console.log('Error on Get15: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse16 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=16`,
        config
      )
  } catch (err) {
    console.log('Error on Get16: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse17 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=17`,
        config
      )
  } catch (err) {
    console.log('Error on Get17: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse18 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=18`,
        config
      )
  } catch (err) {
    console.log('Error on Get18: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse19 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=19`,
        config
      )
  } catch (err) {
    console.log('Error on Get19: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse20 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=20`,
        config
      )
  } catch (err) {
    console.log('Error on Get20: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse21 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=21`,
        config
      )
  } catch (err) {
    console.log('Error on Get21: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse22 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=22`,
        config
      )
  } catch (err) {
    console.log('Error on Get22: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse23 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=23`,
        config
      )
  } catch (err) {
    console.log('Error on Get23: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse24 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=24`,
        config
      )
  } catch (err) {
    console.log('Error on Get24: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse25 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=25`,
        config
      )
  } catch (err) {
    console.log('Error on Get25: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse26 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=26`,
        config
      )
  } catch (err) {
    console.log('Error on Get26: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse27 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=27`,
        config
      )
  } catch (err) {
    console.log('Error on Get27: ', err);
    return res.status(500).send();
  }

  try {
    bcResponse28 = await axios
      .get(
        `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?limit=250&page=28`,
        config
      )
  } catch (err) {
    console.log('Error on Get28: ', err);
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
    for (item of bcResponse10.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse11.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse12.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse13.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse14.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse15.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse16.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse17.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse18.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse19.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse20.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse21.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse22.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse23.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse24.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse25.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse26.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse27.data.data) {
      bcResponse.push(item);
    }
    for (item of bcResponse28.data.data) {
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

  await timeoutPromise(2000);

  try {
    if (!getItems.rows[0]) {
      console.log('Item DB Empty!');
      for (let i = 0; i < bcResponse.length; i++) {
        let bcItemName = bcResponse[i].name.replace(/"|`|'/g, ' ');
        let bcItemId = bcResponse[i].id;
        let bcItemSku = bcResponse[i].sku;
        let bcItemInv = bcResponse[i].inventory_level;

        if (bcItemInv === 0) {
        msg += (`('${bcItemName}', '${bcItemSku}', ${bcItemInv}, ${bcItemId}, 'Product'), `);
        }
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

      if (!getItems.rows[0]) {
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
                                            


module.exports = router;
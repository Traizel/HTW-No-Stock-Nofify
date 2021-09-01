require("dotenv").config();
const { WebClient } = require("@slack/web-api");
const { createEventAdapter } = require("@slack/events-api");
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const { RTMClient } = require("@slack/rtm-api");
const axios = require('axios')
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const moment = require("moment");
const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./pool");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

//change this to push update 1

let dateNow = moment().subtract(1, "days").format('YYYY-MM-DD')
let dateThen = moment().subtract(31, "days").format("YYYY-MM-DD");

setInterval(() => {
  dateNow = moment().format("YYYY-MM-DD");
  dateThen = moment().subtract(30, "days").format("YYYY-MM-DD");
}, 1000 * 60 * 60 * 24);

let config = {
  headers: {
    "X-Auth-Client": process.env.BG_AUTH_CLIENT,
    "X-Auth-Token": process.env.BG_AUTH_TOKEN,
  },
};

app.get("/items", (req, res) => {
  axios
    .get(
      `https://api.bigcommerce.com/stores/et4qthkygq/v3/catalog/products?inventory_level=0`,
      config
    )
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

let daterange = moment().subtract(6, "hours").subtract(1, "years");

app.delete("/deleteitemrange", (req, res) => {
  pool
    .query('DELETE FROM "item" WHERE created_at<=$1', [daterange])
    .then((result) => {
      res.sendStatus(204); //No Content
    })
    .catch((error) => {
      console.log("Error DELETE ", error);
      res.sendStatus(500);
    });
});
  
const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

const conversationId = "C0139RJPUEM";



// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

// Start a basic HTTP server
slackEvents.start().then(() => {
  // Listening on path '/slack/events' by default
    (async () => {
      // See: https://api.slack.com/methods/chat.postMessage
      const res = await web.chat.postMessage({
        icon_emoji: ":email:",
        channel: conversationId,
        text: "Connected",
      });

      // `res` contains information about the posted message
      
      console.log("Message sent: ", res);
    })();
    console.log("bot listening on port", PORT);
});



app.get("/itemlist", (req, res) => {
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

app.post("/orderdetails", (req, res) => {
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

setInterval(() => {
  console.log('This is not setup yet');
}, 1000 * 60 * 60 * 24);
     

 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => {
   console.log("server running on: ", PORT);
 });
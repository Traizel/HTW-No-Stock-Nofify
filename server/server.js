require("dotenv").config();
const { WebClient } = require("@slack/web-api");
const { createEventAdapter } = require("@slack/events-api");
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./modules/pool");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

// Route includes
const itemRouter = require('./routes/itemrouter');



//change this to push update 1




app.use('/api/item', itemRouter);
  
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
     

 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => {
   console.log("server running on: ", PORT);
 });
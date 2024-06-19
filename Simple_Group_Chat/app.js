const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const router = require("./Routes/Login.js");

const app = express();

app.use(router);

app.use(bodyParser.urlencoded({ extended: true }));
let localStorage = {};
app.use("/", (req, res, next) => {
  req.localStorage = localStorage;
  next();
});

app.use("/", (req, res) => {
  // If there's a submitted title, append it to the response body

  const User = req.localStorage.user;

  if (req.body.title) {
    fs.appendFileSync("Chat.txt", User + ":" + req.body.title + " ");
  }

  if (req.body.user) {
    req.localStorage.user = req.body.user;
  }

  const messages = fs.readFileSync("Chat.txt", "utf-8");

  // Send the response
  res.send(`${messages}<form action="/" method="POST">
    <input type="text" name="title"" />
    <button type="submit">Send</button>
  </form>`);
});

app.listen(3000, () => {
  console.log("Server Is Started");
});

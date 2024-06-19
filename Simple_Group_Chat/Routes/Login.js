const express = require("express");

const Router = express.Router();

Router.use("/login", (req, res) => {
  res.send(`<form action="/" method="POST">
    <input type="text" name="user"" />
    <button type="submit">Login</button>
  </form>`);
});

module.exports = Router;

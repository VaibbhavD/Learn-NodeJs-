const express = require("express");

const Router = express.Router();

Router.use("/login", (req, res) => {
  res.send(`
    <form onsubmit="localStorage.setItem('username', document.getElementById('user').value)" action="/" method="POST">
    <input type="text" name="user" id="user" />
    <button type="submit">Login</button>
  </form>`);
});

module.exports = Router;

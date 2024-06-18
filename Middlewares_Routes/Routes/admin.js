const express = require("express");

const Router = express.Router();

Router.get("/add-product", (req, res) => {
  res.send(
    `<form action="/product" method="POST"><input type="text" name="title"/><input type="number" name="Qty"/><button type="submit">Add Product</button></form>`
  );
});

Router.post("/product", (req, res) => {
  console.log(req.body);
  res.send(`${req.body.title}  ${req.body.Qty}`);
});

module.exports = Router;

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res) => {
  res.send(
    `<form action="/product" method="POST"><input type="text" name="title"/><input type="number" name="Qty"/><button type="submit">Add Product</button></form>`
  );
});

app.use("/product", (req, res) => {
  console.log(req.body);
  res.send(`${req.body.title}  ${req.body.Qty}`);
});
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(3000, () => {
  console.log("Server Is Runing");
});

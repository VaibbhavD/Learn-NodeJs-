const express = require("express");
const bodyParser = require("body-parser");

const adminrouter = require("./Routes/admin.js");
const shoproutes = require("./Routes/shop.js");

const app = express();

app.use(bodyParser.urlencoded());

app.use(adminrouter);
app.use(shoproutes);

app.listen(3000, () => {
  console.log("Server Is Runing");
});

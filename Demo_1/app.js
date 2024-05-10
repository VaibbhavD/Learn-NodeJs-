const http = require("http");
const express = require("express");

const routes = require("./routes");

// const server = http.createServer(routes);
const app = express(routes);

app.use((req, res) => {
  res.send("<h1> Vaibhav Dhamanage </h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

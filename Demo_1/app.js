const express = require("express");
const blog = require("./blog.js");
const routes = require("./routes");

// const server = http.createServer(routes);
const app = express();
// app.use(express.static("static"));
app.use("/blog", blog);

// app.use((req, res) => {
//   res.send("<h1> Vaibhav Dhamanage </h1>");
// });
app.get("/", (req, res) => {
  res.send("<h1>Welocme to My Home Page</h1>");
});
app.get("/:slug", (req, res) => {
  res.send(`<h1>Welocme to My ${req.params.slug} Page</h1>`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

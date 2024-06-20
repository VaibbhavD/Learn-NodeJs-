const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const router = require("./Routes/Login.js");

const app = express();

// app.use(router);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readFile("Chat.txt", (err, data) => {
    if (err) {
      console.log(data);
      data = "No Chat Exist";
    }
    res.send(`${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
      <input type="text" name="title" />
      <input type="hidden" name="user" id="username" />
      <button type="submit">Send</button>
      </form>`);
  });
});

app.post("/", (req, res) => {
  console.log(req.body.user);
  console.log(req.body.title);
  fs.writeFile(
    "Chat.txt",
    `${req.body.user}:${req.body.title}`,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/");
    }
  );
  // res.send();
});
app.get("/login", (req, res) => {
  res.send(`
    <form onsubmit="localStorage.setItem('username', document.getElementById('user').value)" action="/" method="POST">
    <input type="text" name="user" id="user" />
    <button type="submit">Login</button>
  </form>`);
});

app.listen(3000, () => {
  console.log("Server Is Started");
});

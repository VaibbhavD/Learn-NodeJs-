const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Welocme to My Blog Page</h1>");
});
router.get("/About", (req, res) => {
  res.send("<h1>Welocme to My Blog. About Page</h1>");
});
router.get("/contect", (req, res) => {
  res.sendFile("blogggg.html", { root: __dirname });
});

module.exports = router;

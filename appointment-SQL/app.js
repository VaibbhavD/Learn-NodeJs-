const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const appointmentRoutes = require("./routes/appointmentRoutes");
const path = require("path"); // Import path to serve static files

const app = express();
const port = 3306;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, "frontend")));

// API routes
app.use("/api", appointmentRoutes);

// Serve index.html for the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html")); // Adjust path if necessary
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

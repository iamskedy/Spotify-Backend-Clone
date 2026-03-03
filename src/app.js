const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Spotify Clone API is running" });
});

module.exports = app;

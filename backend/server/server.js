const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// App initialization
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Environment Variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB Connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB");

  // Start server after DB connection
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error("❌ MongoDB connection failed:", error.message);
  process.exit(1); // Stop app if DB fails
});

// Test Route
app.get("/", (req, res) => {
  res.send("👋 Welcome to SmartSpider API");
});


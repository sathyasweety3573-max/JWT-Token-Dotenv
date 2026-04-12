const express = require("express");
const app = express();

require("dotenv").config();
const mongoose = require("mongoose");

//  correct import
const userRoutes = require("./routes/userRoutes");

//  middleware
app.use(express.json());

//  DEBUG ROUTE (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Server Working");
});

//  connect routes
app.use("/api/user", userRoutes);

// DB connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected ✔"))
  .catch((err) => console.log(err));

// server
app.listen(3000, () => {
  console.log("Server running on 3000");
});
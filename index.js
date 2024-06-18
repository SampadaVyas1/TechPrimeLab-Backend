// // Import required modules
// const express = require("express");
// const { default: mongoose } = require("mongoose");
// const path = require("path");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 4000;

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// app.use(bodyParser.json());

// mongoose.connect(
//   "mongodb+srv://sampadavyas1:admin@admin.vqhuibb.mongodb.net/?retryWrites=true&w=majority&appName=admin"
// );

// const db = mongoose.connection;
// db.on("error", console.log("connection error"));
// db.once("open", () => {
//   console.log("connected to mongodb");
// });

// const User = mongoose.model("User", userSchema);

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({ error: "Email and password are required" });
//   }
//   try {
//     const newUser = new User({
//       email,
//       password,
//     });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (e) {
//     console.log(e, "error");
//   }
// });

// app.listen(port, () => {
//   console.log("port connected");
// });

// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // Include body-parser

const app = express();
const port = 4000;

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://sampadavyas1:admin@admin.vqhuibb.mongodb.net/?retryWrites=true&w=majority&appName=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// const db = mongoose.connection;
// db.on("error", () => console.log("connection error"));
// db.once("open", () => {
//   console.log("connected to mongodb");
// });

// const User = mongoose.model("User", userSchema);

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({ error: "Email and password are required" });
//   }
//   try {
//     const newUser = new User({
//       email,
//       password,
//     });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (e) {
//     if (e.code === 11000) {
//       res.status(400).json({ error: "Email already exists" });
//     } else {
//       console.log(e, "error");
//       res.status(500).json({ error: "Internal server error" });
//     }
//   }
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

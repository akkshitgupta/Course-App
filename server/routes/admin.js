const express = require("express");
const router = express.Router();

const ADMIN = [];

// signup route
router.post("/signup", (req, res) => {
  const { f_name, l_name, username, password } = req.body;
  const newAdmin = { f_name, l_name, username, password };
  ADMIN.push(newAdmin);
  res.json({ newAdmin, message: "Account created successfully" });
});

// login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const ind = ADMIN.findIndex((admin) => admin.username === username);
  if (ind === -1) {
    res.status(404).json({ message: "User doesn't exist" });
  }
  if (ADMIN[ind]["password"] !== password) {
    res.status(403).json({ message: "Invalid username or password" });
  }
  res.json({ message: "Login successful" });
});

module.exports = router;

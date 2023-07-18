const express = require("express");
const route = express.Router();

const USERS = [];

route.post("/signup", (req, res) => {
  const { f_name, l_name, username, password } = req.body;
  const newUser = { f_name, l_name, username, password };
  USERS.push(newUser);
  res.json({ newUser, message: "Account created successfully" });
});

route.post("/login", (req, res) => {
  const { username, password } = req.body;
  const ind = USERS.findIndex((user) => user.username === username);
  if (ind === -1) {
    res.status(404).json({ message: "User doesn't exist" });
  }
  if (USERS[ind]["password"] !== password) {
    res.status(403).json({ message: "Invalid username or password" });
  }
  res.json({ message: "Login successful" });
});

module.exports = route;

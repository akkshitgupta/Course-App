const express = require("express");
const router = express.Router();
const { token } = require("../middleware/auth");

const { USERS } = require("../databases/index");

// user signup route
router.post("/signup", async (req, res) => {
  const { f_name, l_name, username, password } = req.body;
  USERS.findOne({ username }).then((user) => {
    if (user) {
      return res.json({ message: "Username is not available" });
    } else {
      const obj = { f_name, l_name, username, password };
      const newUser = new USERS(obj);
      newUser.save();

      const yourToken = token(obj);

      res.json({ newUser, yourToken, message: "Account created successfully" });
    }
  });
});

// user login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  USERS.findOne({ username }).then((user) => {
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    if (user.password !== password) {
      return res.status(403).json({ message: "Invalid username or password" });
    }
    const yourToken = token(user);
    res.json({ yourToken, message: "Login successful" });
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();

const { token } = require("../middleware/auth");
const { ADMINS } = require("../databases/index");

// admin signup route
router.post("/signup", (req, res) => {
  const { f_name, l_name, username, password } = req.body;
  ADMINS.findOne({ username }).then((admin) => {
    if (admin) {
      return res.json({ message: "Username is not available" });
    }
    const obj = { f_name, l_name, username, password };
    const newAdmin = new ADMINS(obj);
    newAdmin.save();
    const yourToken = token(obj);
    res.json({
      newAdmin,
      yourToken,
      message: "Account created successfully",
    });
  });
});

// admin login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  ADMINS.findOne({ username }).then((admin) => {
    if (!admin) {
      return res.json({ message: "User doesn't exist" });
    }
    if (admin.password !== password) {
      return res.json({ message: "Invalid username or password" });
    }
    const yourToken = token(admin);

    res.json({ yourToken, message: "Login successful" });
  });
});

module.exports = router;

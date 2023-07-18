const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

// generate token
const token = (user) => {
  const payload = {
    username: user.username,
    password: user.password,
  };

  const generate = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  return generate;
};

// verify/authenticate token
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.json({ message: "Invalid token" });
  }
};

module.exports = { auth, token };

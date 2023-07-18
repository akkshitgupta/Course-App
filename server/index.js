require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

const { MONGO_URL, MONGO_DB } = process.env;

app.use(cors());
app.use(express.json());

// routes
const adminRoute = require("./routes/admin.js");
const userRoute = require("./routes/user.js");
const coursesRoute = require("./courses/course.js");

app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/courses", coursesRoute);

// connect to database
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: MONGO_DB,
});
app.listen(3002);

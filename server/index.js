const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// routes
const adminRoute = require("./routes/admin.js");
const userRoute = require("./routes/user.js");
const coursesRoute = require("./courses/course.js");

app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/courses", coursesRoute);
app.use("/purchased", purchasedRoute);

app.listen(3002);

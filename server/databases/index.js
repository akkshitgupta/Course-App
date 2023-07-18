const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  f_name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  l_name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  username: {
    type: String,

    required: true,
    min: 5,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 15,
  },
});

const userSchema = new mongoose.Schema({
  f_name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  l_name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  username: {
    type: String,
    required: true,
    min: 5,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 15,
  },
  purchased: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  code: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  description: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  price: {
    type: Number,
    required: true,
    min: 3,
    max: 255,
  },
  image: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
});

const Admin = mongoose.model("Admin", userSchema);
const User = mongoose.model("User", userSchema);
const Course = mongoose.model("Course", courseSchema);

module.exports = {
  User,
  Admin,
  Course,
};

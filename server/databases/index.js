const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  f_name: {
    type: String,
    required: true,
    min: 3,
    max: 15,
  },
  l_name: {
    type: String,
    required: true,
    min: 3,
    max: 15,
  },
  username: {
    type: String,
    required: true,
    min: 5,
    max: 25,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 20,
  },
});

const userSchema = new mongoose.Schema({
  f_name: {
    type: String,
    required: true,
    min: 3,
    max: 15,
  },
  l_name: {
    type: String,
    required: true,
    min: 3,
    max: 15,
  },
  username: {
    type: String,
    required: true,
    min: 5,
    max: 25,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 20,
  },
  purchased: [{ type: mongoose.Schema.Types.ObjectId, ref: "COURSES" }],
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 5,
    max: 25,
  },
  description: {
    type: String,
    required: true,
    min: 3,
    max: 500,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const ADMINS = mongoose.model("Admin", adminSchema);
const USERS = mongoose.model("User", userSchema);
const COURSES = mongoose.model("Course", courseSchema);

module.exports = {
  USERS,
  ADMINS,
  COURSES,
};

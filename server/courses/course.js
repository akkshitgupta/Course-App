const express = require("express");
const route = express.Router();

const COURSES = [];

route.post("/create", (req, res) => {
  const { title, code, description, price, image } = req.body;
  const newCourse = {
    title,
    code,
    description,
    price,
    image,
  };

  COURSES.push(newCourse);
  res.status(201).json({ newCourse, message: "Course create successfully" });
});

route.get("/all", (req, res) => {
  res.json({ courses: COURSES });
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  const ind = COURSES.findIndex((course) => course.course_code === id);
  if (ind === -1) {
    res.status(404).json({ message: "Course not found" });
  }
  res.json({ course: COURSES[ind] });
});

route.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, code, description, price, image } = req.body;
  const ind = COURSES.findIndex((course) => course.course_code === id);
  if (ind === -1) {
    res.status(404).json({ message: "Course not found" });
  }
  COURSES[ind] = {
    title,
    code,
    description,
    price,
    image,
  };
  res.json({ course: COURSES[ind], message: "Course updated successfully" });
});

module.exports = route;

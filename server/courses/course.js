const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

const { COURSES } = require("../databases/index");

// creating a course
router.post("/create", auth, (req, res) => {
  const { title, description, price, image } = req.body;
  const newCourse = {
    title,
    description,
    price,
    image,
  };
  const course = new COURSES(newCourse);
  course.save();

  res.json({ newCourse, message: "Course create successfully" });
});

// get all courses
router.get("/all", auth, async (req, res) => {
  const courses = await COURSES.find();
  res.json({ courses });
});

// edit a course
router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const course = await COURSES.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!course) {
    return res.json({ message: "Course not found" });
  }
  res.json({ course, message: "Course updated successfully" });
});

// get a single course
router.get("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const course = await COURSES.findById(id);
  if (!course) {
    return res.json({ message: "Course not found" });
  }
  res.json({ course });
});

// delete a course
router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const course = await COURSES.deleteOne({ _id: id });
  if (!course) {
    return res.json({ message: "Course not found" });
  }
  res.json({ message: "Course deleted successfully" });
});

module.exports = router;

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const courseData = require("./data/data.json");

app.get("/", (req, res) => {
  res.send("course Data Server is running");
});

app.get("/courses", (req, res) => {
  res.send(courseData);
});

app.get("/allCategory", (req, res) => {
  const allCategory = courseData.map(({ category }) => {
    return { categoryName: category };
  });

  res.send(allCategory);
});

app.get("/allTags", (req, res) => {
  const allTags = courseData.map(({ tags }) => {
    return tags;
  });
  const singleTags = [...new Set(allTags)];

  res.send(singleTags);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = courseData.find((course) => course.id == id) || {};
  res.send(singleCourse);
});

app.get("/skillLevel/:skillLevel", (req, res) => {
  const skillLevel = req.params.skillLevel;
  const Level = courseData.filter(
    (course) => course.skillLevel.toLowerCase() === skillLevel.toLowerCase()
  );
  res.send(Level);
});

app.get("/language/:language", (req, res) => {
  const language = req.params.language;
  const languageCourse = courseData.filter(
    (course) => course.language.toLowerCase() === language.toLowerCase()
  );
  res.send(languageCourse);
});

app.get("/courses/:tags", (req, res) => {
  const tags = req.params.tags;
  const singleTags =
    courseData.filter((course) => course.tags.toLowerCase() == tags.toLowerCase()) || {};
  res.send(singleTags);
});

app.get("/:category", (req, res) => {
  const category = req.params.category;
  const singleCategory = courseData.filter((c) => c.category === category);
  res.send(singleCategory);
  console.log(category);
});

app.get("*", (req, res) => {
  res.send({ error: "please hit the right link" });
});

app.listen(port, () => {
  console.log("Server is listening on port ", port);
});

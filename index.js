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
app.get("*", (req, res) => {
  res.send({ error: "please hit the right link" });
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = courseData.find((course) => course.id === id) || {};
  res.send(singleCourse);
});

app.listen(port, () => {
  console.log("Server is listening on port ", port);
});

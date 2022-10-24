const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("hey baby");
});

app.listen(port, () => {
  console.log("Server is listening on port ", port);
});

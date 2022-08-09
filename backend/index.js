import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send("Hello, world! Tanks, Nodemon!");
});

app.listen(3000);

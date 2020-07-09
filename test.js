var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use("/", express.static("assets"));

app.get("/index", function (req, res) {
  res.render("index");
});
app.get("/blank", function (req, res) {
  res.render("blank");
});
app.get("/profile/:id", function (req, res) {
  var data = {
    age: 24,
    job: "ninja",
    hobbies: ["guitar", "eating", "sleeping"],
  };
  res.render("profile", { person: req.params.id, data: data });
});
app.listen(5000);

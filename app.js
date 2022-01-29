const express = require("express");

const app = express();

app.use(express.static("public"));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  const data = {
    userName: "Simon",
  };
  res.render("home", data);
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(4000, () => console.log("listening 4000..."));

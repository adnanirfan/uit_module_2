const express = require("express");
const bodyParser = require("body-parser");

const app = express();


// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 4000;
const todos = [];
console.log("FROM main.js");

app.get("/", (req, res) => {
  res.send("FROM SERVER");
});
app.post("/add-todo", (req, res) => {
  console.log("INSIDE POST", req);
  todos.push(req.body);
  res.send(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");

const app = express();
const port = 4000;

const todos = [];

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url, " | ", req.hostname, " | ", req.body, " | ", req.method);
  next();
});

// GET, POST, PUT, DELETE, patch
app.get("/todos", (req, res, next) => {
  res.send(todos);
});
app.post("/add-todo", (req, res) => {
  console.log(req.body);
  todos.push(req.body);
  res.send(todos);
});
app.put("/update-todo/:index", (req, res) => {
  const { index } = req.params;
  todos[index] = req.body;
  console.log(todos[index]);
  res.send(todos);
});
app.delete("/delete/:index", (req, res) => {
  const { index } = req.params;
  todos.splice(index, 1);
  console.log(todos);
  res.send(todos);
});

app.listen(port, () => {
  console.log("Server running on PORT:" + port);
});

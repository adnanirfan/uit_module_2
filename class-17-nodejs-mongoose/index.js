const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const { main } = require("./model");
const Users = require("./model/users");
const Todos = require("./model/todos");
const { generateAccessToken, authenticateToken } = require("./util");

dotenv.config();
// process.env.TOKEN_SECRET;

/**
 * MongoDB Creation - Atlas
 * MongoDB Connection
 * Data Fetching from DB
 * Integrating with APIs
 */

const app = express();
const port = 4000;

const todos = [];

main();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url, " | ", req.hostname, " | ", req.body, " | ", req.method);
  next();
});
app.use(authenticateToken);

// GET, POST, PUT, DELETE, patch

app.get("/todos", async (req, res, next) => {
  try {
    const records = await Todos.find();
    console.log("users ____", records);
    res.json(records);
  } catch (error) {
    console.log(error);
    res.send({ msg: "ERROR...!!", error });
  }
});

app.post("/add-todo", async (req, res) => {
  console.log(req.body);
  console.log(req.user);
  const records = await Todos.create({ ...req.body });
  res.send(records);
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

app.post("/signin", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  try {
    const record = await Users.findOne({ username, password }).exec();
    console.log("RECORD", record);
    const token = generateAccessToken({ ...record._doc });
    res.json({ ...record._doc, token });
  } catch (error) {
    console.log("ERROR:", error);
    res.send(error);
  }
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const records = await Users.create({ ...req.body });
  res.send(records);
});

app.listen(port, () => {
  console.log("Server running on PORT:" + port);
});

const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
/**
 * MongoDB Creation - Atlas 
 * MongoDB Connection
 * Data Fetching from DB
 * Integrating with APIs
 */
const uri =
  "mongodb+srv://dbuser:<password>@cluster0.nh1yk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect(async (err) => {
  const collection = client.db("test").collection("users");
  const x = await collection.find();

  // perform actions on the collection object
  console.log("CONNECTED!", x);
  // client.close();
});

const app = express();
const port = 4000;

const todos = [];

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url, " | ", req.hostname, " | ", req.body, " | ", req.method);
  next();
});
console.log("_+______", client);
// GET, POST, PUT, DELETE, patch

app.get("/todos", async (req, res, next) => {
  try {
    const records = client.db("test").collection("users").find().toArray(); // ({username: "Haris"})
    res.send(records);
  } catch (error) {
    res.send("ERROR...!!");
  }
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

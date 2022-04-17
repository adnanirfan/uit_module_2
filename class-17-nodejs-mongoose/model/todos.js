const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema(
  {
    todo: String,
    isCompleted: Boolean,
    userId: String,
  },
  { timestamps: true }
);

const Todos = mongoose.model("todos", TodosSchema);

module.exports = Todos;

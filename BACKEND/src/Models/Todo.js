const mongoose = require("mongoose");

const Todoschema = new mongoose.Schema({
  task: String,
  done: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("todo", Todoschema);

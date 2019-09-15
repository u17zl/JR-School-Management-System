var mongoose = require("mongoose");

var TestSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

var TestModel = mongoose.model("User", TestSchema);

module.exports = TestModel;

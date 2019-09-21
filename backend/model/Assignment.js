const mongoose = require("mongoose")

const AssignmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  startAt: {
    type: Date,
    required: true
  },
  dueAt: {
    type: Date,
    required: true
  }
})

module.exports = User = mongoose.model("assignment",AssignmentSchema)

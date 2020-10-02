const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tasks = mongoose.model("Task", taskSchema);

module.exports = Tasks;

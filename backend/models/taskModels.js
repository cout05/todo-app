import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Task = mongoose.model("task", taskSchema);

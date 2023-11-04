import express from "express";
import { Task } from "../models/taskModels.js";

const router = express.Router();

//Route to create a new Task
router.post("/", async (request, response) => {
  try {
    if (!request.body.task) {
      return response.status(400).send({
        message: "Send all required fields: task",
      });
    }
    const newTask = { task: request.body.task };
    const task = await Task.create(newTask);
    return response.status(200).send(task);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for getting all Task
router.get("/", async (request, response) => {
  try {
    const task = await Task.find({});
    return response.status(200).send({
      count: task.length,
      data: task,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for updating a task
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.task && !request.body.completed) {
      return response.status(400).send({
        message: "Send all required fields: task or status",
      });
    }
    const { id } = request.params;
    const result = await Task.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Task not found" });
    }
    return response.status(200).send({
      message: "Task Upated!!!",
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for deleting a task
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Task.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: "Task not found" });
    }
    return response.status(200).send({
      message: "Task Deleted!!!",
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

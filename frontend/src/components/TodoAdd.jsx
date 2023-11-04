import React, { useEffect, useContext } from "react";
import { TaskContext } from "../context/taskContext";
import axios from "axios";
import { AddTaskContext } from "../context/AddTaskContext";

const TodoAdd = () => {
  const { task, setTask } = useContext(TaskContext);
  const { add, setAdd } = useContext(AddTaskContext);
  const API_URL = import.meta.env.VITE_API_URL;

  const addTask = () => {
    const data = {
      task,
    };
    axios
      .post(`${API_URL}`, data)
      .then(() => {
        setTask("");
        setAdd(false);
        window.location.reload();
        console.log("task!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const back = () => {
    setAdd(false);
  };

  return (
    <div
      className={`${add ? "flex" : "hidden"} flex-col absolute top-1/2 left-1/2
     transform -translate-x-1/2 -translate-y-1/2 bg-[#f4f5f4] p-4 rounded`}>
      <div className="relative flex flex-col gap-4 justify-center p-4 w-[300px]">
        <h1 className="text-center text-[#515550] text-2xl">Add Task?</h1>
        <div className="flex gap-4 justify-between">
          <button
            onClick={back}
            className="flex-1 bg-[#515550] text-[#f4f5f4] p-2 rounded hover:bg-[#393b38]">
            back
          </button>
          <button
            className="flex-1 bg-[#70adb9] text-[#f4f5f4] p-2 rounded hover:bg-[#9ecdd4]"
            onClick={addTask}>
            add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoAdd;

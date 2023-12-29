import React, { useEffect, useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import axios from "axios";
import { AddTaskContext } from "../context/AddTaskContext";

const apiUrl = import.meta.env.VITE_API_URL;

const TodoAdd = () => {
  const { task, setTask } = useContext(TaskContext);
  const { add, setAdd } = useContext(AddTaskContext);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`${apiUrl}/user`)
      .then((response) => {
        setName(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addTask = () => {
    let user = name.userId;
    const data = {
      task: task,
      userId: user,
    };
    axios
      .post(`${apiUrl}/task`, data)
      .then(() => {
        setTask("");
        setAdd(false);
        window.location.reload();
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
     transform -translate-x-1/2 -translate-y-1/2 bg-[#235e86] p-4 rounded`}>
      <div className="relative flex flex-col gap-4 justify-center p-4 w-[300px]">
        <h1 className="text-center text-[#f4f5f4] text-2xl">Add Task?</h1>
        <div className="flex gap-4 justify-between">
          <button onClick={back} className="flex-1 text-[#f4f5f4] p-2 rounded">
            back
          </button>
          <button
            className="flex-1 bg-[#f4f5f4] text-[#235e86] p-2 rounded hover:bg-[#9ecdd4]"
            onClick={addTask}>
            add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoAdd;

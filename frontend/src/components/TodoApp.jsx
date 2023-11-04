import React, { useContext, useEffect, useState } from "react";
import TodoList from "./TodoList";
import { TaskContext } from "../context/TaskContext";
import { AddTaskContext } from "../context/AddTaskContext";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const { setTask } = useContext(TaskContext);
  const { setAdd } = useContext(AddTaskContext);

  const onAdd = () => {
    if (todo !== "") {
      setTask(todo);
      setAdd(true);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl drop-shadow-xl text-[#f4f5f4] font-bold text-center mb-4">
        To-Do List
      </h1>
      <div>
        <div className="flex gap-1">
          <div className="flex-1">
            <input
              type="text"
              className="w-full drop-shadow-md bg-[#f4f5f4] text-[#515550] outline-[#515550] p-2 border rounded"
              placeholder="Add a new task"
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <button
            onClick={onAdd}
            className="bg-[#f4f5f4] drop-shadow-md text-[#515550] font-semibold p-2 rounded hover:bg-[#bbbebbd3]">
            Add Task
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default TodoApp;

import React, { useContext, useEffect, useState } from "react";
import TodoList from "./TodoList";
import { TaskContext } from "../context/TaskContext";
import { AddTaskContext } from "../context/AddTaskContext";
import axios from "axios";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const { setTask } = useContext(TaskContext);
  const { setAdd } = useContext(AddTaskContext);
  const [isEmpty, setIsEmpty] = useState(false);
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
    if (name == "") {
    }
  }, []);

  const onAdd = () => {
    if (todo !== "") {
      setTask(todo);
      setAdd(true);
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <div className="p-4">
      <Link
        className="text-[#ff4141] w-full drop-shadow-lg font-semibold block text-right p-2 rounded-lg"
        to="/">
        Log Out
      </Link>
      <div className="mt-8 max-w-md mx-auto">
        <h1 className="text-3xl drop-shadow-xl text-[#235e86] font-bold text-center mb-4">
          To-Do List
        </h1>
        <p className="text-[#235e86] text-center font-semi-bold drop-shadow-xl mb-4">
          Hi there, <span className="font-bold capitalize">{name.userId}</span>.
        </p>
        <div className="flex gap-1 mb-6">
          <div className="flex-1">
            <input
              type="text"
              className={`w-full drop-shadow-lg bg-[#f4f5f4] text-[#235e86] ${
                isEmpty ? "border border-[#ff4141]" : "border-0"
              }  p-2 outline-0 rounded`}
              placeholder="Add a new task"
              onChange={(e) => setTodo(e.target.value)}
            />
            {isEmpty ? (
              <p className="text-[#ff4141] absolute">
                There is no task to add.
              </p>
            ) : null}
          </div>
          <button
            onClick={onAdd}
            className="bg-[#f4f5f4] drop-shadow-lg text-[#235e86] font-semibold p-2 rounded hover:bg-[#bbbebbd3]">
            Add Task
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default TodoApp;

import React, { useContext } from "react";
import axios from "axios";
import { TaskIdContext } from "../context/TaskIdContext.jsx";
import { DeleteTaskContext } from "../context/DeleteTaskContext";

const TodoDelete = () => {
  const { id, setId } = useContext(TaskIdContext);
  const { deleteTask, setDeleteTask } = useContext(DeleteTaskContext);
  const API_URL = import.meta.env.VITE_API_URL;

  const isDeleted = () => {
    axios
      .delete(`https://todo-app-backend-three.vercel.app/task/${id}`)
      .then(() => {
        console.log("deleted");
        setId("");
        setDeleteTask(false);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const back = () => {
    setDeleteTask(false);
  };

  return (
    <div
      className={`${
        deleteTask ? "flex" : "hidden"
      } flex-col absolute top-1/2 left-1/2
 transform -translate-x-1/2 -translate-y-1/2 bg-[#f4f5f4] p-4 rounded`}>
      <div className="relative flex flex-col gap-4 justify-center p-4 w-[300px]">
        <h1 className="text-center text-[#515550] text-2xl">Remove Task?</h1>
        <div className="flex gap-4 justify-between">
          <button
            onClick={back}
            className="flex-1 bg-[#515550] text-[#f4f5f4] p-2 rounded hover:bg-[#bbbebbd3]">
            no
          </button>
          <button
            onClick={isDeleted}
            className="flex-1 bg-[#e94c6e] text-white p-2 rounded hover:bg-[#e2abb7]">
            yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoDelete;

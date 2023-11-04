import React, { useContext, useEffect } from "react";
import axios from "axios";
import { TaskIdContext } from "../context/TaskIdContext.jsx";
import { UpdateStatusContext } from "../context/UpdateStatusContext";

const TodoUpdate = () => {
  const { id, setId } = useContext(TaskIdContext);
  const { updateStatus, setUpdateStatus } = useContext(UpdateStatusContext);
  const API_URL = import.meta.env.VITE_API_URL;

  const isUpdated = () => {
    const completed = true;
    const data = {
      completed,
    };
    axios
      .put(`${API_URL}/${id}`, data)
      .then(() => {
        console.log("updated");
        setId("");
        setUpdateStatus(false);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const back = () => {
    setUpdateStatus(false);
  };

  return (
    <div
      className={`${
        updateStatus ? "flex" : "hidden"
      } flex-col absolute top-1/2 left-1/2
transform -translate-x-1/2 -translate-y-1/2 bg-[#f4f5f4] p-4 rounded`}>
      <div className="relative flex flex-col gap-4 justify-center p-4 w-[300px]">
        <h1 className="text-center text-2xl">Complete Task?</h1>
        <div className="flex gap-4 justify-between">
          <button
            onClick={back}
            className="flex-1 bg-[#515550] text-[#f4f5f4] p-2 rounded hover:bg-[#bbbebbd3]">
            no
          </button>
          <button
            onClick={isUpdated}
            className="flex-1 bg-[#70adb9] text-white p-2 rounded hover:bg-[#9ecdd4]">
            yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoUpdate;

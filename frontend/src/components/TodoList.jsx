import React, { useContext, useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { TaskIdContext } from "../context/TaskIdContext";
import axios from "axios";
import { DeleteTaskContext } from "../context/DeleteTaskContext";
import { UpdateStatusContext } from "../context/UpdateStatusContext";
import Loading from "./Loading";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

const apiUrl = import.meta.env.VITE_API_URL;

const TodoList = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [todo, setTodo] = useState([]);
  const { setId } = useContext(TaskIdContext);
  const { setDeleteTask } = useContext(DeleteTaskContext);
  const { setUpdateStatus } = useContext(UpdateStatusContext);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    axios
      .get(`${apiUrl}/task`)
      .then((response) => {
        setTodo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let count = 0;
    todo.map((item) => (item.completed ? (count += 1) : (count += 0)));
    setCompleted(count);
  }, [todo]);

  const onDelete = (id) => {
    setId(id);
    setDeleteTask(true);
  };

  const onUpdate = (id) => {
    setId(id);
    setUpdateStatus(true);
  };

  return (
    <div className="mt-4">
      <div className="bg-[#235e86] text-[#f4f5f4] p-2 flex justify-between mb-2 border rounded">
        <p className="font-semibold">Completed({completed})</p>
        <p className="font-semibold">{currentDate}</p>
      </div>
      {todo.length === 0 ? (
        <Loading />
      ) : (
        todo.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between text drop-shadow-md bg-[#f4f5f4] text-[#235e86] p-2 rounded border mb-2">
            <p
              className={`${item.completed ? "line-through" : ""}
              flex gap-2 font-semibold items-center`}>
              {item.completed ? (
                <BsCheckCircleFill />
              ) : (
                <BsCheckCircle
                  className="cursor-pointer"
                  onClick={() => onUpdate(item._id)}
                />
              )}
              {item.task}
            </p>
            <button
              onClick={() => onDelete(item._id)}
              className="text-[#235e86]">
              <RxCross2 className="text-xl" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;

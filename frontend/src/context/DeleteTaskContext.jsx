import React, { createContext, useState } from "react";

export const DeleteTaskContext = createContext();

const DeleteTaskProvider = ({ children }) => {
  const [deleteTask, setDeleteTask] = useState(false);

  return (
    <DeleteTaskContext.Provider value={{ deleteTask, setDeleteTask }}>
      {children}
    </DeleteTaskContext.Provider>
  );
};

export default DeleteTaskProvider;

import React, { createContext, useState } from "react";

export const TaskIdContext = createContext();

const TaskIdProvider = ({ children }) => {
  const [id, setId] = useState("");

  return (
    <TaskIdContext.Provider value={{ id, setId }}>
      {children}
    </TaskIdContext.Provider>
  );
};

export default TaskIdProvider;

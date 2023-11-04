import React, { createContext, useState } from "react";

export const AddTaskContext = createContext();

const AddTaskProvider = ({ children }) => {
  const [add, setAdd] = useState(false);

  return (
    <AddTaskContext.Provider value={{ add, setAdd }}>
      {children}
    </AddTaskContext.Provider>
  );
};

export default AddTaskProvider;

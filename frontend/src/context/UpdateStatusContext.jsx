import React, { createContext, useState } from "react";

export const UpdateStatusContext = createContext();

const UpdateStatusProvider = ({ children }) => {
  const [updateStatus, setUpdateStatus] = useState(false);

  return (
    <UpdateStatusContext.Provider value={{ updateStatus, setUpdateStatus }}>
      {children}
    </UpdateStatusContext.Provider>
  );
};

export default UpdateStatusProvider;

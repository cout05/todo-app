import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TaskProvider from "./context/taskContext.jsx";
import AddTaskProvider from "./context/AddTaskContext.jsx";
import TaskIdProvider from "./context/TaskIdContext.jsx";
import DeleteTaskProvider from "./context/DeleteTaskContext.jsx";
import UpdateStatusProvider from "./context/UpdateStatusContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UpdateStatusProvider>
    <DeleteTaskProvider>
      <TaskIdProvider>
        <AddTaskProvider>
          <TaskProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </TaskProvider>
        </AddTaskProvider>
      </TaskIdProvider>
    </DeleteTaskProvider>
  </UpdateStatusProvider>
);

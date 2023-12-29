import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import TodoAdd from "./components/TodoAdd";
import TodoApp from "./components/TodoApp";
import TodoUpdate from "./components/TodoUpdate";
import TodoDelete from "./components/TodoDelete";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./app.css";

function App() {
  return (
    <div className="relative h-[100vh]">
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<TodoApp />} />
        </Routes>
      </HashRouter>
      <TodoAdd />
      <TodoDelete />
      <TodoUpdate />
    </div>
  );
}

export default App;

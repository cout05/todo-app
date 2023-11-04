import TodoAdd from "./components/TodoAdd";
import TodoApp from "./components/TodoApp";
import TodoUpdate from "./components/TodoUpdate";
import TodoDelete from "./components/TodoDelete";
import "./app.css";

function App() {
  return (
    <div className="relative h-[100vh]">
      <TodoApp />
      <TodoAdd />
      <TodoDelete />
      <TodoUpdate />
    </div>
  );
}

export default App;

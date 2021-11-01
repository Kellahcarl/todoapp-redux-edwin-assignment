import "./App.css";
import AddTodo from "./components/AddTodo";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <div className="todo">
        <Todos />
      </div>
    </div>
  );
}

export default App;

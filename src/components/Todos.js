import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, markTodoAsComplete } from "../redux/actions/todosActions";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div >
      {todos.map((todo) => (
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <h4
            key={todo.id}
            style={{ textDecoration: todo.is_complete ? "line-through" : "" }}
          >
            {todo.title}
          </h4>
          <div className={`todo-item`} >
            <button className="trash-btn" onClick={() => dispatch(removeTodo(todo.id))}>
              <i className="fas fa-trash"></i>
            </button>
            <button className="complete-btn" onClick={() => dispatch(markTodoAsComplete(todo.id))}>
            {todo.is_complete ? "completed" : "not completed"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;

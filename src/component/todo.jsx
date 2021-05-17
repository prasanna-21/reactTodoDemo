import React from "react";
const Todo = (props) => {
  const { todo, deleteTodo, completeTodo, setUpdate } = props;
  return (
    <div className="todo-list" key={todo.id}>
      <p
        key={todo.id}
        style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}
      >
        {todo.title}
        {/* <input
          type="text"
          value={todo.title}
          onChange={(e) => setUpdate(e.target.value, todo.id)}
        /> */}
      </p>
      <button className="complete" onClick={() => completeTodo(todo.id)}>
        complete
      </button>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        delete
      </button>
    </div>
  );
};

export default Todo;

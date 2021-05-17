import React from "react";

const TodoList = (props) => {
  const { value, onChange, onSubmit } = props;
  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add todo here.."
        value={value}
        onChange={onChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoList;

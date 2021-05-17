import React, { Component } from "react";
import TodoList from "./todoList";
import Todo from "./todo";

class TodoForm extends Component {
  state = {
    title: "",
    todos: [],
  };

  ///adding todo when form submit
  addTodo = (e) => {
    e.preventDefault();
    if (this.state.title === "") return null;
    else {
      let todos = [...this.state.todos];
      let todo = {
        id: Math.floor(Math.random() * 100),
        title: this.state.title,
        isComplete: false,
      };

      todos.push(todo);

      this.setState({ todos: todos });
      this.setState({ title: "" });
    }
  };
  //input value update
  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  // complete  todo
  handleComplete = (id) => {
    let todos = [...this.state.todos];
    todos.filter((todo) => {
      if (todo.id === id) return (todo.isComplete = true);
      else return null;
    });
    this.setState({ todos: todos });
  };

  // delete todo
  handleDelete = (id) => {
    // let todos = [...this.state.todos];
    const filterTodos = this.state.todos.filter((todo, index) => {
      // if (todo.id === id) return todo.splice(index, 1);

      return todo.id !== id;
    });
    this.setState({ todos: filterTodos });
  };

  // handleUpdate = (title, id) => {
  //   const todos = [...this.state.todos];
  //   todos.map((todo) => {
  //     if (todo.id === id) todo.title = title;
  //   });
  //   this.setState({ todos });
  // };
  render() {
    return (
      <div className="todo">
        <TodoList
          value={this.state.title}
          onSubmit={this.addTodo}
          onChange={this.onChange}
        />
        <div className="todo-box">
          {this.state.todos.length === 0 && (
            <p style={{ margin: 10 }}>no todos..</p>
          )}
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={this.handleComplete}
              // setUpdate={this.handleUpdate}
              deleteTodo={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoForm;

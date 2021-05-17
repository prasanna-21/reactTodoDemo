import React, { Component } from "react";
import "./App.css";
import TodoForm from "./component/todoform";

class App extends Component {
  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <TodoForm />
      </div>
    );
  }
}

export default App;

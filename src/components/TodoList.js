// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        <TodoItem />
        <button
          type="button"
          className="btn btn-block btn-danger text-capitalize mt-5"
        >
          Clear List
        </button>
      </ul>
    );
  }
}

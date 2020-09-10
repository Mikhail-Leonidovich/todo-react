import React, { Component } from "react";
import "../todo-list/todoListStyle.css";
import TasksListComponent from "../tasks-list/tasksListComponent.js";

export default class TodoListComponent extends Component {
  render() {
    return (
      <section className="content">
        <div className="container">
          <div className="block">
            <div className="block__add">
              <input
                className="block__add-text"
                type="text"
                placeholder="Введите заметку"
              />
              <button type="button" className="btn-add">
                Add
              </button>
            </div>
            <TasksListComponent />
          </div>
        </div>
      </section>
    );
  }
}

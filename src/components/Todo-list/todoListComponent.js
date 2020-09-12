import React, { Component } from "react";
import "../Todo-list/todoListStyle.css";
import TasksListComponent from "../Tasks-list/tasksListComponent.js";
import TodoDate from "../../TodoDate";

export default class TodoListComponent extends Component {
  render() {
    const todoItems = TodoDate.map((item) => {
      return (
        <TasksListComponent
          key={item.id}
          todo={item.todo}
          checked={item.checked}
        />
      );
    });

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
            <div className="tasks__list">{todoItems}</div>
          </div>
        </div>
      </section>
    );
  }
}

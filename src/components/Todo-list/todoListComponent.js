import React, { Component } from "react";
import "../Todo-list/todoListStyle.css";
import TasksListComponent from "../Tasks-list/tasksListComponent.js";
import TodoDate from "../../TodoDate.js";

export default class TodoListComponent extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: TodoDate,
    };
  }

  handleChange = (id) => {
    const index = this.state.todoItems.map((item) => item.id).indexOf(id);
    this.setState((state) => {
      let modifiedList = [...state.todoItems];
      modifiedList[index].checked = !modifiedList[index].checked;

      return { todoItems: modifiedList };
    });
  };

  render() {
    const { todoItems } = this.state;

    const incompTasks = todoItems.filter((item) => {
      return item.checked === false;
    });
    const compTasks = todoItems.filter((item) => {
      return item.checked === true;
    });

    const tasks = [...incompTasks, ...compTasks].map((item) => {
      return (
        <TasksListComponent
          key={item.id}
          todo={item.todo}
          checked={item.checked}
          handleClick={() => {
            this.handleChange(item.id);
          }}
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
            <div className="tasks__list">{tasks}</div>
          </div>
        </div>
      </section>
    );
  }
}

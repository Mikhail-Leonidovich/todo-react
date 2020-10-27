import React, { Component } from "react";
import "../Todo-list/todoListStyle.css";
import TasksItemComponent from "../Tasks-list/tasksItemComponent.js";
import todoDate from "../../todoDate.js";

export default class TodoListComponent extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: todoDate,
      counter: 3,
    };
  }

  handleDone = (id) => {
    const index = this.state.todoItems.map((item) => item.id).indexOf(id);
    this.setState((state) => {
      let { todoItems } = state;
      todoItems[index].checked = !todoItems[index].checked;
      return todoItems;
    });
  };

  handleDelete = (id) => {
    const index = this.state.todoItems.map((item) => item.id).indexOf(id);
    this.setState((state) => {
      let { todoItems } = state;
      todoItems.splice(index, 1);
      return todoItems;
    });
  };

  handleAdd = () => {
    const taskValue = document.querySelector(".block__add-text").value;
    const newTask = {
      todo: taskValue,
      id: this.state.counter,
      checked: false,
    };

    this.setState((state) => {
      let { todoItems } = state;
      todoItems.push(newTask);
      let { counter } = state;
      counter = counter + 1;
      console.log(todoItems, counter);
      return { todoItems, counter };
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
        <TasksItemComponent
          key={item.id}
          todo={item.todo}
          checked={item.checked}
          handleDone={() => {
            this.handleDone(item.id);
          }}
          handleDelete={() => {
            this.handleDelete(item.id);
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
              <button
                type="button"
                className="btn-add"
                onClick={this.handleAdd}
              >
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

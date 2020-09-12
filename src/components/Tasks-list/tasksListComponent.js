import React, { Component } from "react";
import "./tasksListStyle.css";

const TasksListComponent = (props) => {
  return (
    <div class="tasks__item" id={props.id}>
      <div class="text">{props.todo}</div>
      <button class="btn-del" id={props.id}>
        Delete
      </button>
      <button class="btn-done">Done{props.checked}</button>
    </div>
  );
};

export default TasksListComponent;

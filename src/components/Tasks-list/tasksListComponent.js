import React, { Component } from "react";
import "./tasksListStyle.css";

const TasksListComponent = (props) => {
  return (
    <div className="tasks__item" key={props.id}>
      <div className="text">{props.todo}</div>
      <button className="btn-del">Delete{props.id}</button>
      <button className="btn-done">Done{props.checked}</button>
    </div>
  );
};

export default TasksListComponent;

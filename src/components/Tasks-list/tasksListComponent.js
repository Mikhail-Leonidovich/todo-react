import React, { Component } from "react";
import "./tasksListStyle.css";

const TasksListComponent = (props) => {
  const doneClass = "text done";

  return (
    <div className="tasks__item" key={props.id}>
      <div className={props.checked ? "text done" : "text"}>{props.todo}</div>
      <button className="btn-del" onClick={props.handleDelete}>
        Delete
      </button>
      <button
        className="btn-done"
        onClick={props.handleDone}
        checked={props.checked}
      >
        Done
      </button>
    </div>
  );
};

export default TasksListComponent;

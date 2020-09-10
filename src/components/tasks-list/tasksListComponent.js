import React, { Component } from "react";
import "../tasks-list/tasksListStyle.css";

export default class TasksListComponent extends Component {
  render() {
    return (
      <div className="tasks__list">
        <div className="tasks__item hide">
          <div className="text"></div>
          <button className="btn-del"></button>
          <button className="btn-done"></button>
        </div>
      </div>
    );
  }
}

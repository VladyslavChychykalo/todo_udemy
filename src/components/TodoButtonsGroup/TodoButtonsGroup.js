import React, { Component } from "react";

class TodoButtonsGroup extends Component {
  state = {};
  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-info">All</button>
        <button className="btn btn-outline-secondary">Active</button>
        <button className="btn btn-outline-secondary">Done</button>
      </div>
    );
  }
}

export default TodoButtonsGroup;

import React, { Component } from "react";

class TodoListItem extends Component {
  render() {
    const {
      text,
      done,
      important,
      handleDelete,
      onToggleDone,
      onToggleImportant
    } = this.props;
    return (
      <>
        <span
          style={{
            color: important ? "red" : "black",
            textDecoration: done ? "line-through" : "none",
            cursor: "pointer"
          }}
          onClick={onToggleDone}
        >
          {text}
        </span>
        <button
          className="btn btn-outline-success btn-sm"
          onClick={handleDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>
      </>
    );
  }
}

export default TodoListItem;

import React, { Component } from "react";

class TodoButtonsGroup extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];
  render() {
    const { filter, onFilterChange } = this.props;
    return (
      <div className="btn-group">
        {this.buttons.map(({ name, label }) => {
          const isActive = name === filter;
          const cls = isActive ? "btn-info" : "btn-outline";
          return (
            <button
              type="button"
              className={`btn ${cls}`}
              key={name}
              onClick={() => onFilterChange(name)}
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  }
}

export default TodoButtonsGroup;

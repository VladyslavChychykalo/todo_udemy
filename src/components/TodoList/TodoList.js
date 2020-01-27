import React from "react";
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = ({ items, handleDelete, onToggleDone, onToggleImportant }) => (
  <ul className="list-group">
    {items.map(({ id, ...rest }) => (
      <li className="list-group-item" key={id}>
        <TodoListItem
          {...rest}
          handleDelete={() => handleDelete(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;

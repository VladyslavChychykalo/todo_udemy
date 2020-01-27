import React, { Component } from "react";
import TodoList from "./TodoList/TodoList";
import TodoInput from "./TodoInput/TodoInput";
import TodoButtonsGroup from "./TodoButtonsGroup/TodoButtonsGroup";
import AppHeaderCount from "./AppHeaderCount/AppHeaderCount";
import shortid from "shortid";

export default class App extends Component {
  state = { items: [] };

  addTodoItem = text => {
    const { items } = this.state;
    const item = {
      id: shortid.generate(),
      text,
      important: false,
      done: false
    };

    this.setState({
      items: [...items, item]
    });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }));
  };

  onToggleDone = id => {
    const { items } = this.state;
    const item = items.find(i => i.id === id);
    const updatedItem = { ...item, done: !item.done };

    this.setState(({ items }) => ({
      items: items.map(i => (i.id === id ? updatedItem : i))
    }));
  };

  onToggleImportant = id => {
    const { items } = this.state;
    const item = items.find(i => i.id === id);
    const updatedItem = { ...item, important: !item.important };

    this.setState(({ items }) => ({
      items: items.map(i => (i.id === id ? updatedItem : i))
    }));
  };

  render() {
    const { items } = this.state;
    const doneCount = items.filter(el => el.done).length;
    const todoCount = items.length - doneCount;

    return (
      <div>
        <AppHeaderCount toDo={todoCount} done={doneCount} />
        <TodoButtonsGroup />
        <TodoInput addText={this.addTodoItem} />
        <TodoList
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          handleDelete={this.handleDelete}
          items={items}
        />
      </div>
    );
  }
}

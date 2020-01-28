import React, { Component } from "react";
import TodoList from "./TodoList/TodoList";
import TodoInput from "./TodoInput/TodoInput";
import TodoButtonsGroup from "./TodoButtonsGroup/TodoButtonsGroup";
import AppHeaderCount from "./AppHeaderCount/AppHeaderCount";
import SearchInput from "./SearchInput/SearchInput";
import shortid from "shortid";

export default class App extends Component {
  state = { items: [], term: "", filter: "all" };

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
    console.log(items);
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

  // Search !!!
  onSearchChange = term => {
    this.setState({ term });
  };

  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(i => i.text.indexOf(term) > -1);
  };

  // Filter !!!
  filter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "done":
        return items.filter(i => i.done);
      case "active":
        return items.filter(i => !i.done);
      default:
        return items;
    }
  };

  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { items, term, filter } = this.state;

    const doneCount = items.filter(el => el.done).length;
    const todoCount = items.length - doneCount;

    const visibleItems = this.filter(this.search(items, term), filter);

    return (
      <div>
        <AppHeaderCount toDo={todoCount} done={doneCount} />
        <SearchInput onSearchChange={this.onSearchChange} />
        <TodoButtonsGroup
          onFilterChange={this.onFilterChange}
          filter={filter}
        />
        <TodoInput addText={this.addTodoItem} />
        <TodoList
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          handleDelete={this.handleDelete}
          items={visibleItems}
        />
      </div>
    );
  }
}

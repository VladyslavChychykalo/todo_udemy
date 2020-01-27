import React, { Component } from "react";

class TodoInput extends Component {
  state = { input: "" };

  onChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { addText } = this.props;
    const { input } = this.state;

    addText(input);
    this.setState({
      input: ""
    });
  };

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.onSubmit} action="">
        <input onChange={this.onChange} type="text" value={input} />
      </form>
    );
  }
}

export default TodoInput;

import React, { Component } from "react";

export default class SearchInput extends Component {
  state = { term: "" };

  onChange = e => {
    const term = e.target.value;

    this.setState({ term });

    this.props.onSearchChange(term);
  };

  render() {
    const { term } = this.state;
    return (
      <input
        className="form-control"
        onChange={this.onChange}
        type="text"
        value={term}
      />
    );
  }
}

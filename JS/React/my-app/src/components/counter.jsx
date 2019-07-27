import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div className = "app">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className = "btn m-2 btn-secondary btn-sm">Increment</button>
        <button onClick={() => this.props.onDecrement(this.props.counter)} className = "btn m-2 btn-secondary btn-sm">Decrement</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className = "btn m-2 btn-danger btn-sm">Delete</button>
      </div>
    );
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    const { value } = this.props.counter;
    classes += value === 0 ? "warning" : "primary";
    return classes
  };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

};

export default Counter;

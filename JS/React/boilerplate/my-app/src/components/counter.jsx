import React, { Component } from 'react';
import './style.css'

class Counter extends Component {
  state = {
    value: this.props.value
  };
  handleIncrement = () => {
    this.setState({value: this.state.value + 1})
  }

  handleDecrement = () => {
    if (this.state.value !== 0) {
      this.setState({value: this.state.value - 1})
    }
  }

  render() {
    return (
      <div className = "app">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={(this.handleIncrement)} className = "btn m-2 btn-secondary btn-sm">Increment</button>
        <button onClick={(this.handleDecrement)} className = "btn m-2 btn-secondary btn-sm">Decrement</button>
        <button className = "btn m-2 btn-danger btn-sm">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    const { value } = this.state;
    classes += value === 0 ? "warning" : "primary";
    return classes
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

}







export default Counter;

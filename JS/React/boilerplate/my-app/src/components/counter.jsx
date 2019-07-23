import React, { Component } from 'react';
import './style.css'

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1})
  }

  handleDecrement = () => {
    if (this.state.count !== 0) {
      console.log('decremented')
      this.setState({count: this.state.count - 1})
    }
  }

  render() {
    return (
      <div className = "app">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className = "btn m-2 btn-secondary btn-sm">Increment</button>
        <button onClick={this.handleDecrement} className = "btn m-2 btn-secondary btn-sm">Decrement</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

}







export default Counter;

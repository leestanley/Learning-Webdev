import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Counter extends Component {
  state = {
    count: 0
  }
};

render() {
   return (
    <div className="App">
      <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
    </div>
  );
}


  // getBagdeClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;
  // }

  // formatCount() {
  //   const { count } = this.state;
  //   return count === 0 ? 'Zero': count;
  // };
}

import React, { Component } from 'react';
import './App.css';
import Counters from "./components/counters"

export default class App extends Component {
  render() {
     return (
      <div className="App">
        <Counters />
      </div>
    );
  }
}

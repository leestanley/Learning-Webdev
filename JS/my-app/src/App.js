import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions"


function App() {
  const [val, setVal] = useState(0);
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();


  function cat() {
    dispatch(increment(10))
  }

  return (
    <div className="App">
      <h1>  
        Hello world {counter}
      </h1>
      <button onClick={cat}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Info</h3> : ''}
    </div>
  );
}

export default App;

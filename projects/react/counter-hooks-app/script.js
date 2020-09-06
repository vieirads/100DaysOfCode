import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
      setCounter(counter + 1);
  }

  function decrement() {
      setCounter(counter - 1);
  }

  function reset() {
      setCounter(0);
  }

  return <div>
      <p>{counter}</p>
      <div id="btn-container">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}    >Reset</button>
      </div>
  </div>;
}

const el = <Counter />;
ReactDOM.render(
    el,
    document.getElementById('root')
);

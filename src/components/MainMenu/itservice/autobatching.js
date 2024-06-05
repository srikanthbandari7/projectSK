

import React, { useState } from 'react';

function Autobatching() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Multiple calls to setCount will be batched together
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Autobatching;
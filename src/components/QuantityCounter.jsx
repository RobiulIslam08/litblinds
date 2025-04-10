import React, { useState } from 'react';

const QuantityCounter = () => {
  const [count, setCount] = useState(2);

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className="inline-flex border rounded overflow-hidden mt-2 md:mt-3">
      <button
        onClick={handleDecrease}
        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border-r"
      >
        -
      </button>
      <div className="px-4 py-1 text-center bg-gray-100 border-x">
        {count}
      </div>
      <button
        onClick={handleIncrease}
        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border-l"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;

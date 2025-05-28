// import React from 'react';

// const QuantityCounter = ({ quantity, setQuantity }) => {
//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleIncrease = () => {
//     if (quantity < 20) { // Assuming a max quantity of 20
//       setQuantity(quantity + 1);
//     }
//   };

//   return (
//     <div className="inline-flex border rounded overflow-hidden mt-2 md:mt-3">
//       <button
//         onClick={handleDecrease}
//         className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border-r"
//       >
//         -
//       </button>
//       <div className="px-4 py-1 text-center bg-gray-100 border-x">
//         {quantity}
//       </div>
//       <button
//         onClick={handleIncrease}
//         className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border-l"
//       >
//         +
//       </button>
//     </div>
//   );
// };

// export default QuantityCounter;
import React from 'react';

const QuantityCounter = ({ quantity, setQuantity }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 20) { // Assuming a max quantity of 20
      setQuantity(quantity + 1);
    }
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
        {quantity}
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

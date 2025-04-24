import React, { useState } from "react";

const sizes = [
  '25"X35"', '25"X15"', '35"X25"',
  '25"X16"', '25"X25"', '35"X35"',
  '10"X15"', 
];

export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState('35"X25"');

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-black">
        Size: <span className="font-bold">{selectedSize}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSize(size)}
            className={`px-3 py-1 rounded-full border text-sm transition
              ${
                selectedSize === size
                  ? "border-cyan-500 text-black ring-2 ring-cyan-500"
                  : "border-gray-300 text-gray-800 hover:border-cyan-500 hover:text-cyan-500"
              }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

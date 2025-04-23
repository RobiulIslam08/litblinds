

import React from "react";

const ViewCartPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 bg-gray-100 min-h-screen my-8 md:my10 lg:my-12">
      {/* Left: Products and Pricing Section */}
      <div className="bg-white shadow-md rounded-2xl w-full lg:w-2/3 p-6">
        <div className="flex justify-between border-b pb-4 mb-6">
          <button className="bg-blue text-white px-5 py-2 rounded-lg font-semibold shadow-sm">Products</button>
          <button className="bg-blue text-white px-5 py-2 rounded-lg font-semibold shadow-sm">Pricing</button>
        </div>

        {/* Product Item */}
        <div className="flex justify-between items-center border-b pb-6">
          <div>
            <h2 className="font-bold text-lg">WindowTest</h2>
            <p className="text-gray-600 text-sm">Window</p>
            <p className="text-blue-color text-sm font-semibold">1</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400 line-through">70 $</p>
            <p className="text-blue-color text-sm font-semibold">$</p>
            <div className="flex gap-2 mt-2 justify-end">
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium transition duration-200 ease-in-out">Edit</button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition duration-200 ease-in-out">Delete</button>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Summary Section */}
      <div className="bg-white shadow-md rounded-2xl w-full lg:w-1/3 p-6 flex flex-col gap-6">
        <div>
          <div className="bg-gray-600 text-white text-center py-3 rounded-t-lg text-lg font-semibold">Your Subtotal</div>
          <div className="bg-gray-100 text-center py-6 rounded-b-lg">
            <p className="text-gray-700 font-medium text-base">Subtotal $0</p>
            <button className="bg-blue hover:bg-primary text-white px-4 py-3 rounded-lg mt-4 w-full font-semibold transition-all duration-200">Confirm Order</button>
          </div>
        </div>

        <div>
          <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
          <div className="flex gap-2">
            <input
              id="promo"
              type="text"
              placeholder="Promo Code"
              className="flex-grow border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-color text-sm"
            />
            <button className="bg-blue hover:bg-primary text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCartPage;

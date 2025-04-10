import React from 'react';

import { useState } from "react"
const ShippingSection = () => {
	const [shippingAddress, setShippingAddress] = useState("1234 Main St")
	const [city, setCity] = useState("")
	const [state, setState] = useState("")
	const [zipCode, setZipCode] = useState("")
	const [deliveryOption, setDeliveryOption] = useState("express")
  
	const handleSubmit = (e) => {
	  e.preventDefault()
	  console.log("Form submitted")
	}
  
	return (
		<div className=" p-4 border border-gray-200 bg-gray-50 rounded-md">
      <h1 className="text-xl font-medium text-gray-800 mb-3">Shipping & Production Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Shipping Information */}
        <div>
          <h2 className="text-base font-medium text-gray-800 mb-2">Shipping Information</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="shipping-address" className="block text-sm font-medium text-gray-700 mb-1">
                Shipping Address:
              </label>
              <input
                type="text"
                id="shipping-address"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="City"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                placeholder="State"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700 mb-1">
                Zip Code
              </label>
              <input
                type="text"
                id="zip-code"
                placeholder="Zip Code"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>

            <div className="mt-4 mb-3">
              <h3 className="text-base font-medium text-gray-800 mb-3">Delivery Options</h3>

              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    checked={deliveryOption === "standard"}
                    onChange={() => setDeliveryOption("standard")}
                    className="mr-2"
                  />
                  <span>Standard Shipping - $4.99</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="delivery"
                    value="express"
                    checked={deliveryOption === "express"}
                    onChange={() => setDeliveryOption("express")}
                    className="mr-2"
                  />
                  <span>Express Shipping - $9.99</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="delivery"
                    value="free"
                    checked={deliveryOption === "free"}
                    onChange={() => setDeliveryOption("free")}
                    className="mr-2"
                  />
                  <span>Free Shipping - 5-10 Business Days</span>
                </label>
              </div>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded">
              Proceed to Checkout
            </button>
          </form>
        </div>

        {/* Right Column - Production Details */}
        <div>
          <h2 className="text-base font-medium text-gray-800 mb-2">Production Details</h2>

          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-800">Estimated Production Time: 2-3 Business Days</p>
            </div>

            <div>
              <p className="text-sm text-gray-800">Product Availability: In Stock</p>
            </div>

            <div>
              <p className="text-sm text-gray-800">Shipping Carrier: Standard Shipping</p>
            </div>

            <div>
              <p className="text-sm text-gray-800">Estimated Delivery: 5-7 Business Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
};

export default ShippingSection;
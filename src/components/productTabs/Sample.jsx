import React from 'react';
import { useState } from "react"
const Sample = () => {
	const [fullName, setFullName] = useState("")
	const [shippingAddress, setShippingAddress] = useState("")
	const [email, setEmail] = useState("")
  
	const handleSubmit = (e) => {
	  e.preventDefault()
	  console.log("Order submitted:", { fullName, shippingAddress, email })
	}
	return (
		<div className="p-4 border border-gray-200 bg-gray-50 rounded-md">
		<h1 className="text-xl font-medium text-gray-900 mb-1">Order Free Samples - Window Blinds</h1>
  
		<p className="text-sm text-gray-700 mb-3">
		  Get A Free Sample Of Our Window Blinds To See Their Quality And Style.
		</p>
  
		<h2 className="text-lg font-medium text-gray-900 mb-1">Request Free Sample</h2>
  
		<p className="text-sm text-gray-700 mb-2">Fill Out The Form Below To Order Your Free Sample:</p>
  
		<form onSubmit={handleSubmit} className="space-y-2">
		  <div>
			<label htmlFor="full-name" className="block text-sm text-gray-700 mb-1">
			  Full Name:
			</label>
			<input
			  type="text"
			  id="full-name"
			  className="w-full border border-gray-300 rounded px-3 py-1.5"
			  value={fullName}
			  onChange={(e) => setFullName(e.target.value)}
			/>
		  </div>
  
		  <div>
			<label htmlFor="shipping-address" className="block text-sm text-gray-700 mb-1">
			  Shipping Address:
			</label>
			<textarea
			  id="shipping-address"
			  className="w-full border border-gray-300 rounded px-3 py-1.5"
			  rows={3}
			  value={shippingAddress}
			  onChange={(e) => setShippingAddress(e.target.value)}
			/>
		  </div>
  
		  <div>
			<label htmlFor="email" className="block text-sm text-gray-700 mb-1">
			  Email Address:
			</label>
			<input
			  type="email"
			  id="email"
			  className="w-full border border-gray-300 rounded px-3 py-1.5"
			  value={email}
			  onChange={(e) => setEmail(e.target.value)}
			/>
		  </div>
  
		  <div>
			<button
			  type="submit"
			  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 px-4 rounded text-sm"
			>
			  Order Free Sample
			</button>
		  </div>
		</form>
  
		<div className="mt-4">
		  <h2 className="text-lg font-medium text-gray-900 mb-1">What To Expect</h2>
  
		  <p className="text-sm text-gray-700 mb-2">Here's What You'll Receive In Your Free Sample Package:</p>
  
		  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-0.5">
			<li>Sample Pieces Of Different Blind Styles</li>
			<li>Color And Texture Variations</li>
			<li>Product Catalog And Ordering Information</li>
		  </ul>
  
		  <p className="text-sm text-gray-700 mt-1">Here's A Preview Of Our Sample Package:</p>
		</div>
	  </div>
	);
};

export default Sample;
import { Home } from 'lucide-react';
import React, { useState } from 'react';
import { ChevronRight, CreditCard, Shield, Globe, LayoutGrid, QrCode, BellRing } from "lucide-react"
import { FaUser, FaShoppingCart, FaExchangeAlt, FaCreditCard, FaHeart } from "react-icons/fa"
import { Link } from 'react-router-dom';
const UserProfilePage = () => {
	const [showAddressForm, setShowAddressForm] = useState(false)

	const toggleAddressForm = () => {
	  setShowAddressForm(!showAddressForm)
	}
	return (
		<div>
			<div className="my-7 md:my-16 border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden">
		  {/* User Profile Section */}
		  <div className="p-4 flex justify-between items-center">
			<div className="flex items-center gap-3">
			  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
				<FaUser className="text-yellow-800 text-lg" />
			  </div>
			  <span className="font-medium text-lg">Mr,</span>
			</div>
		<Link to="/edit-profile">
		<button className="bg-gray-200 hover:bg-gray-300 px-6 py-1.5 rounded-md text-gray-700 transition-colors font-medium">
			  Edit
			</button>
		</Link>
		  </div>
	
		  {/* Order Delivery Banner */}
		  <div className="bg-[#1a2d5a] text-white py-3 px-4 flex justify-between items-center">
			<div className="font-medium">Your Running Order Delivery : -227 Days</div>
			<div className="font-medium">Time: -14:-40:-8</div>
		  </div>
	
		  {/* Dashboard Cards */}
		  <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-gray-200">
			{/* Order Card */}
			<div className="p-6 flex flex-col items-center text-center">
			  <div className="mb-2">
				<FaShoppingCart className="text-2xl text-gray-700" />
			  </div>
			  <h3 className="font-bold mb-1">Order</h3>
			  <p className="text-sm mb-1">0 Active</p>
			  <a href="#" className="text-gray-700 hover:underline text-sm">
				Manage & Track
			  </a>
			</div>
	
			{/* Returns Card */}
			<div className="p-6 flex flex-col items-center text-center">
			  <div className="mb-2">
				<FaExchangeAlt className="text-2xl text-gray-700" />
			  </div>
			  <h3 className="font-bold mb-1">Returns</h3>
			  <p className="text-sm mb-1">0 Active</p>
			  <a href="#" className="text-gray-700 hover:underline text-sm">
				Request
			  </a>
			</div>
	
			{/* Credits Card */}
			<div className="p-6 flex flex-col items-center text-center">
			  <div className="mb-2">
				<FaCreditCard className="text-2xl text-gray-700" />
			  </div>
			  <h3 className="font-bold">Litblinds Credits</h3>
			</div>
	
			{/* Wishlist Card */}
			<div className="p-6 flex flex-col items-center text-center">
			  <div className="mb-2">
				<FaHeart className="text-2xl text-gray-700" />
			  </div>
			  <h3 className="font-bold mb-1">Wishlist</h3>
			  <p className="text-sm">0 Saved Items</p>
			</div>
		  </div>
		</div>

		// accound - setting
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* My Account Section */}
        <div className="bg-white rounded-md shadow">
          <h2 className="text-2xl font-bold p-4 border-b">My Account</h2>

          {!showAddressForm ? (
            <div className="divide-y">
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={toggleAddressForm}
              >
                <div className="flex items-center">
                  <Home className="h-5 w-5 mr-3" />
                  <span>Address</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-3" />
                  <span>Payment Method</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-3" />
                  <span>Warranty Claims</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Order Number</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Product Number</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Problem</label>
                  <textarea
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    rows="4"
                  ></textarea>
                </div>

                <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded text-center">Sent Message</button>
              </div>

              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                <div className="flex items-center">
                  <QrCode className="h-5 w-5 mr-3" />
                  <span>QR Code</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ) : (
            <div className="p-4">
              <div className="flex items-center mb-4 cursor-pointer" onClick={toggleAddressForm}>
                <Home className="h-5 w-5 mr-3" />
                <span className="font-medium">Address</span>
                <ChevronRight className="h-5 w-5 ml-auto" />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Billing Address</h3>
                  <div className="space-y-3">
                    <input type="text" placeholder="First Name" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="Last Name" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="ALT Phone Number" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="Address Line 1" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="Address Line 2" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="City" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="State" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="Zip Code" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="Country" className="w-full border border-gray-300 p-2" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Delivery Address: (Receiver)</h3>
                  <div className="space-y-3">
                    <input type="text" placeholder="First Name" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="Last Name" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="ALT Phone Number" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="Address Line 1" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="Address Line 2" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="City" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="State" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="Zip Code" className="w-full border border-gray-300 p-2" />
                    <input type="text" placeholder="Country" className="w-full border border-gray-300 p-2" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Settings Section */}
        <div className="bg-white rounded-md shadow">
          <h2 className="text-2xl font-bold p-4 border-b">Settings</h2>
          <div className="divide-y">
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-3" />
                <span>Country :</span>
              </div>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=20&width=30" alt="Canada Flag" className="h-5 w-7 mr-2" />
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
              <div className="flex items-center">
                <LayoutGrid className="h-5 w-5 mr-3" />
                <span>Language :</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-3" />
                <span>Security</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
              <div className="flex items-center">
                <BellRing className="h-5 w-5 mr-3" />
                <span>Notification</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
		</div>
	  )
};

export default UserProfilePage;
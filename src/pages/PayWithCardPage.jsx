import React from 'react';

export default function PayWithCardPage() {
  return (
    <div className="min-h-screen  py-10 px-4">
      <h1 className="text-2xl font-semibold text-center mb-10">Pay with Card</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Billing Address */}
        <div className="bg-white rounded-md shadow-md p-6 border">
          <h2 className="text-lg font-medium mb-4">Billing Address</h2>
          <FormSection />
        </div>

        {/* Delivery Address */}
        <div className="bg-white rounded-md shadow-md p-6 border">
          <h2 className="text-lg font-medium mb-4">Delivery Address: (Receiver)</h2>
          <FormSection />
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-md shadow-md border">
          <div className="p-4 border-b">
            <img
              src="https://www.gocustomblinds.com/logo.png"
              alt="GoCustomBlinds Logo"
              className="h-12 object-contain mx-auto"
            />
          </div>
          <div className="p-6 space-y-4">
            <Input label="CARD HOLDER NAME" placeholder="Enter Card Holder Name" />
            <Input label="EMAIL" placeholder="Email" />
            <Input label="CARD NUMBER" placeholder="Valid Card Number" icon />
            <div className="grid grid-cols-3 gap-2">
              <Input label="MON" placeholder="MON" />
              <Input label="YEAR" placeholder="Year" />
              <Input label="CV CODE" placeholder="CVC" />
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              PAY NOW ($0)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormSection() {
  return (
    <form className="space-y-3">
      <Input label="First Name:" placeholder="First Name:" />
      <Input label="Last Name:" placeholder="Last Name:" />
      <Input label="ALT Phone number" placeholder="Phone number" />
      <Input label="Address:" placeholder="Address first line" />
      <Input placeholder="Address Second line" />
      <Input label="City" placeholder="City" />
      <Input label="State/Province" placeholder="State/Province" />
      <Input label="ZIP/Postal Code" placeholder="ZIP/Postal Code" />
      <Input label="Country" placeholder="Afghanistan" />
    </form>
  );
}

function Input({ label, placeholder, icon }) {
  return (
    <div>
      {label && <label className="block text-sm mb-1 font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {icon && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <img
              src="https://img.icons8.com/ios-filled/20/000000/bank-card-back-side.png"
              alt="card icon"
              className="h-5 w-5"
            />
          </span>
        )}
      </div>
    </div>
  );
}

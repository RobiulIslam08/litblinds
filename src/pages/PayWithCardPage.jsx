
import { BsPaypal } from 'react-icons/bs';
import React, { useState } from 'react';

export default function PayWithCardPage() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleToggle = (method) => {
    setSelectedMethod((prev) => (prev === method ? null : method));
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-100 my-5 md:my-7 lg:my-9">
     

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
          <p className="text-lg font-medium pt-6 pl-6">Payment With</p>

          {/* Payment Method Buttons */}
          <div className="border-b my-4 px-6 pb-4 flex gap-4 flex-wrap">
            <PaymentOption
              selected={selectedMethod === 'card'}
              onClick={() => handleToggle('card')}
              label="Debit / Credit Card"
              iconSrc="https://cdn-icons-png.flaticon.com/512/633/633611.png"
            />
            <PaymentOption
              selected={selectedMethod === 'paypal'}
              onClick={() => handleToggle('paypal')}
              label="PayPal"
              icon={<BsPaypal size={20} />}
            />
          </div>

          {/* Payment Form */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${selectedMethod ? 'max-h-[1000px] p-6' : 'max-h-0 p-0'}`}
          >
            {selectedMethod === 'card' && (
              <div className="space-y-4">
                <Input label="CARD HOLDER NAME" placeholder="Enter Card Holder Name" />
               
                <Input label="CARD NUMBER" placeholder="Valid Card Number" icon />
                <div className="grid grid-cols-3 gap-2">
                  <Input label="Expires" placeholder="DD/MM/YY" />
                 
                  <Input label="CV CODE" placeholder="CVC" />
                </div>
                <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition">
                  PAY NOW ($0)
                </button>
              </div>
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable FormSection
function FormSection() {
  return (
    <div className="space-y-3">
      <Input label="First Name:" placeholder="First Name:" />
      <Input label="Last Name:" placeholder="Last Name:" />
      <Input label="ALT Phone number" placeholder="Phone number" />
      <Input label="Address:" placeholder="Address first line" />
      <Input placeholder="Address Second line" />
      <Input label="City" placeholder="City" />
      <Input label="State/Province" placeholder="State/Province" />
      <Input label="ZIP/Postal Code" placeholder="ZIP/Postal Code" />
      <Input label="Country" placeholder="Afghanistan" />
    </div>
  );
}

// Reusable Input Component
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

// Reusable Payment Option Button
function PaymentOption({ iconSrc, label, selected, onClick, icon }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border rounded-md p-2 flex items-center gap-2 transition 
        ${selected ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-300 hover:bg-gray-100'}`}
    >
      {iconSrc && <img src={iconSrc} alt={label} className="w-6 h-6 object-contain" />}
      {icon && <span>{icon}</span>}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
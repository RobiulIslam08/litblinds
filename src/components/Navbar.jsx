import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaLocationDot, FaUser } from 'react-icons/fa6';
import { IoIosNotifications } from 'react-icons/io';
import { IoCart, IoNotifications } from 'react-icons/io5';

const Navbar = () => {
	const [selectedLanguage, setSelectedLanguage] = useState("English");
	

	const languages = ["English", "Español", "Français", "Arabic"];

	// for currency
	const [currency, setCurrency] = useState("USD");
	const currencies = [
		"USD", "CAD", "EUR", "AED", "GBP", "AUD", "NZD", "JPY", "PKR", "BDT",
		"CNY", "INR", "RUB", "ZAR", "CHF", "SEK", "NOK", "DKK", "KRW", "TRY",
		"BRL", "MXN", "PLN", "THB", "MYR", "SGD", "HKD", "PHP", "IDR", "SAR",
		"KWD", "EGP", "VND"
	];

	return (
		<div className=''>
			{/* first part */}
			<div className='flex justify-between items-center bg-[#eeeeee] px-7 py-2'>
				{/* left */}
				<p>Your trusted store for Home Decoration</p>

				{/* middle */}
				<div className='flex items-center gap-2'>
					<FaLocationDot />
					<p>Find Retailer</p>
				</div>

				{/* right */}
				<div className='flex items-center gap-6'>
					{/* language */}

					{/* language */}
<div className="flex items-center gap-2">
  <p>Language</p>
  <div className="relative inline-block  p-[3px] ">
    <select
      value={selectedLanguage}
      onChange={(e) => setSelectedLanguage(e.target.value)}
      className="block appearance-none w-full  border px-[7px]  text-gray-700  rounded leading-tight focus:outline-none  "
    >
      {languages.map((lang, index) => (
        <option key={index} value={lang}>
          {lang}
        </option>
      ))}
    </select>
    
  </div>
</div>


					{/* currency */}
					<div className=" flex items-center  gap-2">
						<p>Currency</p>
						<select
							value={currency}
							onChange={(e) => setCurrency(e.target.value)}
							className="block appearance-none w-full bg-white border  text-gray-700  px-[7px] rounded leading-tight focus:outline-none  "
						>
							{currencies.map((cur, index) => (
								<option key={index} value={cur}>
									{cur}
								</option>
							))}
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								className="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M14.95 7.95a.5.5 0 00-.7-.7L10 11.5 5.75 7.25a.5.5 0 00-.7.7l5 5a.5.5 0 00.7 0l5-5z" />
							</svg>
						</div>
					</div>

					{/* notice cart user */}
					<div className='flex items-center gap-4 '>
						<div className='flex flex-col items-center leading-2.5'>
						<IoNotifications />
							<p>notice</p>
						</div>
						<div className='flex flex-col items-center leading-2.5'>
						<FaShoppingCart />
							<p>cart</p>
						</div>
						<div className='flex flex-col items-center leading-2.5'>
							<FaUser />
							<p>user</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
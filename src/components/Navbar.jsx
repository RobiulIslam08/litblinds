
import React, { useState } from 'react';

import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FaLocationDot, FaUser } from 'react-icons/fa6';

import { IoNotifications } from 'react-icons/io5';
import videoLogo from "../assets/video.mp4"
import Discount from './home/Discount';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation();
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
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ name: 'Home', path: '/' },
		{ name: 'Window Blinds', path: '/allproduct/window-blinds' },
		{ name: 'Wallpaper', path: '/allproduct/wallpaper' },
		{ name: 'Wall And Ceiling Panels', path: '/allproduct/wall-ceiling-panels' },
		{ name: 'PPVC Flooring (Vinyl Flooring)', path: '/allproduct/pvc-flooring' },
		{ name: 'Shop By Need/Room', path: '/allproduct/shop-by-need' },
		{ name: 'Shop By Features', path: '/allproduct/shop-by-features' },
		{ name: 'Help Center', path: '/allproduct/help-center' },
		{ name: 'Find Retailer', path: '/allproduct/find-retailer' },
	];


	return (
		<div className=''>
			{/* first part */}
			<div className='flex justify-between items-center bg-[#eeeeee] px-3 lg:px-7 py-2'>
				{/* left */}
				{/* this for desktop */}
				<p className='text-primary font-semibold text-xs hidden lg:flex'>Your trusted store for Home Decoration</p>
				{/* this for mobile */}
				<video
					src={videoLogo} // Changed path
					autoPlay
					loop
					muted


					style={{ width: '80px', height: 'auto' }} // Explicit dimensions
					className="w-full h-auto lg:hidden flex"
				>
					Your browser does not support the video tag.
				</video>

				{/* mobile menu button */}
				<div className="md:hidden flex items-center">

					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-primary hover:text-blue-600  rounded-lg transition-colors"
						aria-expanded={isOpen}
					>
						{!isOpen ? (
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>


						) : (
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
					</button>
				</div>



				{/* middle */}
				{/* for desktop */}
				<div className='hidden lg:flex items-center gap-2'>
					<FaLocationDot />
					<p className='text-primary font-bold'>Find Retailer</p>
				</div>
				{/* this for mobile */}
				{/* language */}
				<div className="  flex lg:hidden items-center ">

					<div className="relative inline-block   ">
						<select
							value={selectedLanguage}
							onChange={(e) => setSelectedLanguage(e.target.value)}
							className="block appearance-none w-full text-[10px] font-semibold  border px-[8px]  text-gray-700  rounded leading-tight focus:outline-none  "
						>
							{languages.map((lang, index) => (
								<option key={index} value={lang} className='font-bold'>
									{lang}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* currency */}
				<div className=" flex lg:hidden items-center  ">

					<select
						value={currency}
						onChange={(e) => setCurrency(e.target.value)}
						className="block appearance-none w-full bg-white border text-[10px] font-semibold text-gray-700  px-[8px] rounded leading-tight focus:outline-none  "
					>
						{currencies.map((cur, index) => (
							<option key={index} value={cur} className='font-bold'>
								{cur}
							</option>
						))}
					</select>

				</div>


				{/* right */}
				<div className='flex items-center lg:gap-6 gap-2'>
					{/* language */}
					<div className="lg:flex items-center gap-2 hidden ">
						<p className=' font-bold'>Language</p>
						<div className="relative inline-block  p-[3px] ">
							<select
								value={selectedLanguage}
								onChange={(e) => setSelectedLanguage(e.target.value)}
								className="block appearance-none w-full font-bold  border px-[7px]  text-gray-700  rounded leading-tight focus:outline-none  "
							>
								{languages.map((lang, index) => (
									<option key={index} value={lang} className='font-bold'>
										{lang}
									</option>
								))}
							</select>
						</div>
					</div>

					{/* currency */}
					<div className="hidden  lg:flex items-center  gap-2">
						<p className=' font-bold'>Currency</p>
						<select
							value={currency}
							onChange={(e) => setCurrency(e.target.value)}
							className="block appearance-none w-full bg-white border font-bold text-gray-700  px-[7px] rounded leading-tight focus:outline-none  "
						>
							{currencies.map((cur, index) => (
								<option key={index} value={cur} className='font-bold'>
									{cur}
								</option>
							))}
						</select>

					</div>

					{/* notice cart user */}
					<div className='flex items-center lg:gap-4 gap-2'>
						<div className='flex flex-col items-center leading-2.5'>
							<IoNotifications />
							<p className='text-xs hidden lg:flex'>notification</p>
						</div>
						<div className='flex flex-col items-center leading-2.5'>
							<FaShoppingCart />
							<p className='text-xs  hidden lg:flex'>cart</p>
						</div>
						<div className='flex flex-col items-center leading-2.5'>
							<FaUser />
							<p className='text-xs  hidden lg:flex'>user</p>
						</div>
					</div>
				</div>
			</div>









			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-[#eeeeee] border-t w-[70%] absolute z-10">
					<div className="py-3 space-y-2">
						{menuItems.map((item) => (
							<a
								key={item.path}
								href={item.path}
								className="block text-gray-700 hover:bg-gray-100 px-3 py-2  border-b"
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>

				</div>
			)}


			{/* second part */}
			<div className='flex justify-between items-center mx-3 lg:mx-6 my-1'>
				{/* logo */}
				<div className="hidden lg:flex">

					<video
						src={videoLogo} // Changed path
						autoPlay
						loop
						muted


						style={{ width: '150px', height: 'auto' }} // Explicit dimensions
						className="w-full h-auto"
					>
						Your browser does not support the video tag.
					</video>



				</div>
				{/* search input */}
				<div className='relative inline-block'>
					<input type="text" className=' border border-[#b3b3b3] outline-none w-[130px] lg:w-[350px] rounded-md lg:py-1 lg:px-3 px-2 text-xs lg:text:md' />
					<FaSearch className='absolute text-xs right-2 top-2 text-[#555555] ' />
				</div>
				{/* call */}
				<div className='flex gap-2 text-xs'>
					<p>📞2547086262t </p>
					<div className='lg:hidden flex items-center gap-2'>
						<FaLocationDot />
						<p className='text-primary font-bold'>Find Retailer</p>
					</div>
					<p className='hidden lg:flex'>100% Satisfaction</p>
					<p className='hidden lg:flex'>Reasonable price</p>
				</div>
			</div>

			{/* third nav */}
			<nav className="hidden lg:flex bg-white border-t-1 md:bg-[#eeeeee]">
				<div className="px-10  ">
					<div className="flex items-center justify-between h-16">
						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-2">
							{menuItems.map((item) => (
								<a
									key={item.name} // Use path as unique key
									href={item.path}
									className="text-primary font-bold hover:text-blue-600 text-sm px-3 py-2 transition-colors"
								>
									{item.name}
								</a>
							))}
						</div>

						{/* Mobile Menu Button */}
						{/* <div className="md:hidden flex items-center">
							
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="text-primary hover:text-blue-600 p-2 rounded-lg transition-colors"
								aria-expanded={isOpen}
							>
								{!isOpen ? (
									<svg
										className="w-8 h-8"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
									
									
								) : (
									<svg
										className="w-8 h-8"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div> */}
					</div>
				</div>

				{/* Mobile Menu */}
				{/* {isOpen && (
					<div className="md:hidden bg-[#eeeeee] border-t">
						<div className="py-3 space-y-2">
							{menuItems.map((item) => (
								<a
									key={item.path}
									href={item.path}
									className="block text-gray-700 hover:bg-gray-100 px-3 py-2  border-b"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</a>
							))}
						</div>

					</div>
				)} */}
			</nav>
			{location.pathname === '/' && <Discount />}

		</div>
	);
};

export default Navbar;

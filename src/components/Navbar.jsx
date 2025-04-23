
import React, { useState } from 'react';

import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FaLocationDot, FaUser } from 'react-icons/fa6';

import { IoCall, IoLogOut, IoNotifications } from 'react-icons/io5';
import videoLogo from "../assets/video.mp4"
import Discount from './home/Discount';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation();
	const [selectedLanguage, setSelectedLanguage] = useState("English");
	const [isMenuOpenUser, setIsMenuOpenUser] = useState(false);
	const [isMenuOpenCart, setIsMenuOpenCart] = useState(false);
	// Toggle menu visibility on click
	const toggleMenuCart = () => setIsMenuOpenCart(!isMenuOpenCart);
	const toggleMenuUser = () => setIsMenuOpenUser(!isMenuOpenUser);
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
		{ name: 'Help Center', path: '/help-center' },
		// { name: 'Login', path: '/login' },
		// { name: 'Registration', path: '/registration' },
		// { name: 'Find Retailer', path: '/allproduct/find-retailer' },
	];


	return (
		<div className=''>
			{/* first part */}
			<div className='flex justify-around lg:justify-between items-center bg-[#eeeeee] lg:px-7 py-2'>
				{/* left */}
				{/* this for desktop */}
				<p className='text-primary font-semibold text-xs hidden lg:flex' id="site_title">Your trusted store for Home Decoration</p>
				{/* this for mobile */}


				{/* mobile menu button and logo */}
				<div className='flex items-center gap-2'>
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
					{/* logo */}
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
				</div>





				{/* middle */}
				{/* for desktop */}
				<Link to="/find-retailer"><div className='hidden lg:flex items-center gap-2'>
					<FaLocationDot className='text-primary' />
					<p className='text-primary font-bold'>Find Retailer</p>
				</div></Link>
				{/* this for mobile */}

				{/* for language and currency */}
				<div className='flex justify-center items-center gap-2'>
					{/* language */}
					<div className="  flex lg:hidden items-center ">

						<div className="relative inline-block   ">
							<select
								value={selectedLanguage}
								onChange={(e) => setSelectedLanguage(e.target.value)}
								className="bg-white block appearance-none w-full text-[10px] font-semibold  border px-[8px]  text-gray-700  rounded leading-tight focus:outline-none  "
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
								className="bg-white block appearance-none w-full font-bold  border px-[7px]  text-gray-700  rounded leading-tight focus:outline-none  "
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
						<div className='flex flex-col items-center leading-2.5 relative'>
							<div>
								<IoNotifications className='text-primary' />
								<p className='absolute text-white bg-red-400 font-bold p-[1.5px] rounded-full  text-[10px] right-1 bottom-3'>4</p>
							</div>
							<p className='text-xs  hidden lg:flex'>Notice</p>
						</div>
						{/* cart */}
						<div className="flex flex-col items-center leading-2.5 relative group cursor-pointer">
							<FaShoppingCart className="text-primary" onClick={toggleMenuCart} />
							<p className="text-xs hidden lg:flex">Cart</p>

							{/* Dropdown */}
							<div
								className={`absolute top-8 right-0 bg-white shadow-lg border rounded-md w-36  transition-all duration-300 z-50 ${isMenuOpenCart ? 'opacity-100 visible' : 'opacity-0 invisible'
									}`}
							>
								<div>
									<div className='flex items-center gap-2 px-2 py-4 bg-blue text-white '>
										<FaShoppingCart className="text-white  font-semibold" />
										<p>Your Cart</p>

									</div>
									<div className='flex items-center justify-between gap-2 px-2 py-3 bg-white text-black '>
										<p className='font-semibold'>Sub Total</p>
										<p className='font-semibold'>0 $</p>

									</div>
									<Link to='/view-cart'>	<button className='bg-gray-700 text-white text-center  w-full py-3'>View Cart</button></Link>
									<button className='bg-blue text-white text-center  w-full py-3'>Buy it Now</button>
								</div>
							</div>
						</div>
						{/* user */}
						<div className="flex flex-col items-center leading-2.5 relative group cursor-pointer">
							<FaUser className="text-primary" onClick={toggleMenuUser} />
							<p className="text-xs hidden lg:flex">user</p>

							{/* Dropdown */}
							<div
								className={`absolute top-8 right-0 bg-white shadow-lg border rounded-md w-32 py-2 transition-all duration-300 z-50 ${isMenuOpenUser ? 'opacity-100 visible' : 'opacity-0 invisible'
									}`}
							>
								<p className="px-4 py-1 text-sm hover:bg-gray-100">Hi, Rabiul</p>
								<Link to='/user-profile'><p className="px-4 py-1 text-sm hover:bg-gray-100">Profile</p></Link>
								<p className="px-4 py-1 text-sm hover:bg-gray-100"><Link to="/login">Login</Link></p>
								<p className="px-4 py-1 text-sm hover:bg-gray-100"><Link to="registration">Register</Link></p>
								<p className="px-4 py-1 text-sm hover:bg-gray-100 text-red-500">Log out</p>
							</div>
						</div>

					</div>
				</div>
			</div>









			{/* Mobile Menu */}
			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden absolute  left-0 w-[75%] h-[550px]  bg-blue  z-30  animate-slide-in-left">
					{/* User profile section */}
					<div className="p-4 border-b border-blue-700">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-full bg-white overflow-hidden">
								<img src="/placeholder.svg?height=48&width=48" alt="Profile" className="w-full h-full object-cover" />
							</div>
							<div className="text-white">
								<h3 className="font-bold text-lg">Robi</h3>
								<p className="text-xs text-blue-200">robi@gmail.com</p>
							</div>
						</div>
					</div>
					<div className="py-1 space-y-2 ">
						{menuItems.map((item) => (
							<a
								key={item.path}
								href={item.path}
								className="block text-base font-semibold px-4 py-2 rounded hover:bg-gray-100 transition duration-200 text-white"
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>
					{/* for logout */}
					<div className='flex items-center text-white px-4 py-1 gap-3 border w-fit m-4'>
						<IoLogOut className='text-lg' />
						<p className='font-semibold'>Log Out</p>
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


						style={{ width: '120px', height: 'auto' }} // Explicit dimensions
						className="w-full h-auto"
					>
						Your browser does not support the video tag.
					</video>



				</div>
				{/* find retailer */}
				<Link to='/find-retailer'>
					<div className='lg:hidden flex items-center gap-2'>
						<FaLocationDot className='text-primary text-xs' />
						<p className='text-primary font-bold text-xs'>Find Retailer</p>
					</div></Link>
				{/* search input */}
				<div className='relative inline-block'>
					<input type="text" className=' border border-[#b3b3b3] outline-none w-[130px] lg:w-[350px] rounded-md lg:py-1 lg:px-3 px-2 text-xs lg:text:md' />
					<FaSearch className='absolute text-xs right-2 top-2 text-primary ' />
				</div>
				{/* call */}
				<div className='flex gap-2 text-xs'>
					<div className='flex items-center justify-center gap-[2px]'><IoCall className='text-primary' /><p> 2547086262t</p> </div>

					<p className='hidden lg:flex'>100% Satisfaction</p>
					<p className='hidden lg:flex'>Reasonable price</p>
				</div>
			</div>

			{/* third nav */}
			<nav className="hidden lg:flex bg-white border-t-1 md:bg-[#eeeeee]">
				<div className="px-10  ">
					<div className="flex items-center justify-between h-9">
						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-5">
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


					</div>
				</div>


			</nav>
			{location.pathname === '/' && <Discount />}

		</div>
	);
};

export default Navbar;

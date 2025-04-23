import { Home } from 'lucide-react';
import React, { useState } from 'react';
import { ChevronRight, CreditCard, Shield, Globe, LayoutGrid, QrCode, BellRing } from "lucide-react"
import { FaUser, FaShoppingCart, FaExchangeAlt, FaCreditCard, FaHeart } from "react-icons/fa"
import { Link } from 'react-router-dom';
import Dropdown from '../components/home/Dropdown';
const UserProfilePage = () => {
	const [showAddressForm, setShowAddressForm] = useState(false)

	const toggleAddressForm = () => {
		setShowAddressForm(!showAddressForm)
	}

	// Changed from single activeSection to an object with multiple active sections
	const [activeSections, setActiveSections] = useState({
		address: false,
		payment: false,
		language: false,
		security: false,
		country: false,
	})

	const [selectedLanguage, setSelectedLanguage] = useState("select")
	const [selectedCountry, setSelectedCountry] = useState("usa")
	const [showPassword, setShowPassword] = useState({
		old: false,
		new: false,
		retype: false,
	})

	// Modified to toggle just one section without affecting others
	const toggleSection = (section) => {
		setActiveSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}))
	}

	const togglePasswordVisibility = (field) => {
		setShowPassword({
			...showPassword,
			[field]: !showPassword[field],
		})
	}

	// Language options
	const languageOptions = [
		{ value: "select", label: "Select A Language" },
		{ value: "english", label: "English" },
		{ value: "arabic", label: "Arabic" },
		{ value: "danish", label: "Danish" },
		{ value: "french", label: "French" },
		{ value: "spanish", label: "Spanish" },
	]

	// Country options
	const countryOptions = [
		{ value: "usa", label: "United States" },
		{ value: "canada", label: "Canada" },
		{ value: "uk", label: "United Kingdom" },
		{ value: "australia", label: "Australia" },
		{ value: "germany", label: "Germany" },
	]

	// Country flags mapping
	const countryFlags = {
		usa: "🇺🇸",
		canada: "🇨🇦",
		uk: "🇬🇧",
		australia: "🇦🇺",
		germany: "🇩🇪",
	}
	return (
		<div className='mb-7'>
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
				<div className="bg-blue text-white py-3 px-4 flex justify-between items-center">
					<div className="font-medium text-xs md:text-base">Your Running Order Delivery : -227 Days</div>
					<div className="font-medium text-xs md:text-base">Time: -14:-40:-8</div>
				</div>

				{/* Dashboard Cards */}
				<div className="grid grid-cols-2  md:grid-cols-4 divide-x divide-gray-200">
					{/* Order Card */}
					<div className="p-6 flex flex-col items-center text-center shadow-md">
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
					<div className="p-6 flex flex-col items-center text-center shadow-md">
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
					<div className="p-6 flex flex-col items-center text-center shadow-md">
						<div className="mb-2">
							<FaCreditCard className="text-2xl text-gray-700" />
						</div>
						<h3 className="font-bold">Litblinds Credits</h3>
					</div>

					{/* Wishlist Card */}
					<div className="p-6 flex flex-col items-center text-center shadow-md">
						<div className="mb-2">
							<FaHeart className="text-2xl text-gray-700" />
						</div>
						<h3 className="font-bold mb-1">Wishlist</h3>
						<p className="text-sm">0 Saved Items</p>
					</div>
				</div>
			</div>

			{/* account - setting */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{/* My Account Section */}
				<div className="bg-white rounded-md shadow">
					<h2 className="text-2xl font-bold p-4 border-b border-gray-400">My Account</h2>

					<div className="divide-y divide-gray-400">
						{/* Address Section */}
						<div>
							<div
								className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
								onClick={() => toggleSection("address")}
							>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="mr-3"
									>
										<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
										<polyline points="9 22 9 12 15 12 15 22"></polyline>
									</svg>
									<span>Address</span>
								</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-gray-400"
								>
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</div>

							{activeSections.address && (
								<div className="p-4 pt-0">
									<div className="space-y-6">
										<div>
											<h3 className="text-xl font-bold mb-3">Billing Address</h3>
											<div className="space-y-3">
												<input type="text" placeholder="First Name" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="Last Name" className="w-full border border-gray-400 p-2" />
												<input
													type="text"
													placeholder="ALT Phone Number"
													className="w-full border border-gray-400 p-2"
												/>
												<input type="text" placeholder="Address Line 1" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="Address Line 2" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="City" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="State" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="Zip Code" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="Country" className="w-full border border-gray-400 p-2" />
											</div>
										</div>

										<div>
											<h3 className="text-xl font-bold mb-3">Delivery Address: (Receiver)</h3>
											<div className="space-y-3">
												<input type="text" placeholder="First Name" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="Last Name" className="w-full border border-gray-400 p-2" />
												<input
													type="text"
													placeholder="ALT Phone Number"
													className="w-full border border-gray-400 p-2"
												/>
												<input type="text" placeholder="Address Line 1" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="Address Line 2" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="City" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="State" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="Zip Code" className="w-full border border-gray-400 p-2" />
												<input type="text" placeholder="Country" className="w-full border border-gray-400 p-2" />
											</div>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Payment Method Section */}
						<div>
							<div
								className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
								onClick={() => toggleSection("payment")}
							>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="mr-3"
									>
										<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
										<line x1="1" y1="10" x2="23" y2="10"></line>
									</svg>
									<span>Payment Method</span>
								</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-gray-400"
								>
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</div>

							{activeSections.payment && (
								<div className="p-4 pt-0">
									<div className="space-y-4">
										<div className="flex items-center justify-between p-2 border-b border-gray-400">
											<div>4520********21BB M****</div>
											<div className="flex items-center space-x-2">
												<div className="bg-gray-800 text-white text-xs px-1.5 py-0.5 rounded">HD</div>
												<button className="text-gray-500">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
														<circle cx="12" cy="12" r="3"></circle>
													</svg>
												</button>
											</div>
										</div>

										<div className="flex items-center justify-between p-2 border-b border-gray-400">
											<div>4520********21BB M****</div>
											<div className="flex items-center space-x-2">
												<div className="bg-gray-800 text-white text-xs px-1.5 py-0.5 rounded">HD</div>
												<button className="text-gray-500">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
														<circle cx="12" cy="12" r="3"></circle>
													</svg>
												</button>
											</div>
										</div>

										<button className="w-full bg-blue text-white py-2.5 hover:bg-primary transition-colors">
											Add Card
										</button>
									</div>
								</div>
							)}
						</div>

						{/* Warranty Claims Section */}
						<div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="mr-3"
								>
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
								</svg>
								<span>Warranty Claims</span>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-gray-400"
							>
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
						</div>

						{/* Form Section */}
						<div className="p-4 space-y-4">
							<div>
								<label className="block text-sm font-medium mb-1">Order Number</label>
								<input
									type="text"
									className="w-full border border-gray-400 rounded p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium mb-1">Product Number</label>
								<input
									type="text"
									className="w-full border border-gray-400 rounded p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium mb-1">Problem</label>
								<textarea
									className="w-full border border-gray-400 rounded p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
									rows="4"
								></textarea>
							</div>

							<button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded text-center">Sent Message</button>
						</div>

						{/* QR Code Section */}
						<div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="mr-3"
								>
									<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
									<rect x="7" y="7" width="3" height="3"></rect>
									<rect x="14" y="7" width="3" height="3"></rect>
									<rect x="7" y="14" width="3" height="3"></rect>
									<rect x="14" y="14" width="3" height="3"></rect>
								</svg>
								<span>QR Code</span>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-gray-400"
							>
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
						</div>
					</div>
				</div>

				{/* Settings Section */}
				<div className="bg-white rounded-md shadow">
					<h2 className="text-2xl font-bold p-4 border-b border-gray-400">Settings</h2>

					<div className="divide-y divide-gray-400">
						{/* Country Section */}
						<div>
							<div
								className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
								onClick={() => toggleSection("country")}
							>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="mr-3"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<line x1="2" y1="12" x2="22" y2="12"></line>
										<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
									</svg>
									<span>Country :</span>
								</div>
								<div className="flex items-center">
									<span className="mr-2">{countryFlags[selectedCountry]}</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-gray-400"
									>
										<polyline points="9 18 15 12 9 6"></polyline>
									</svg>
								</div>
							</div>

							{activeSections.country && (
								<div className="p-4 pt-0">
									<Dropdown
										label="Select a Country"
										options={countryOptions}
										value={selectedCountry}
										onChange={setSelectedCountry}
									/>
								</div>
							)}
						</div>

						{/* Language Section */}
						<div>
							<div
								className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
								onClick={() => toggleSection("language")}
							>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="mr-3"
									>
										<rect x="3" y="3" width="7" height="7"></rect>
										<rect x="14" y="3" width="7" height="7"></rect>
										<rect x="14" y="14" width="7" height="7"></rect>
										<rect x="3" y="14" width="7" height="7"></rect>
									</svg>
									<span>Language :</span>
								</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-gray-400"
								>
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</div>

							{activeSections.language && (
								<div className="p-4 pt-0">
									<Dropdown
										label="Select a Language"
										options={languageOptions}
										value={selectedLanguage}
										onChange={setSelectedLanguage}
									/>
								</div>
							)}
						</div>

						{/* Security Section */}
						<div>
							<div
								className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
								onClick={() => toggleSection("security")}
							>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="mr-3"
									>
										<circle cx="12" cy="12" r="3"></circle>
										<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
									</svg>
									<span>Security</span>
								</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-gray-400"
								>
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</div>

							{activeSections.security && (
								<div className="p-4 pt-0">
									<div className="bg-gray-100 p-4 space-y-4">
										<div>
											<label className="block mb-1">Old Password:</label>
											<div className="relative">
												<input
													type={showPassword.old ? "text" : "password"}
													className="w-full border border-gray-400 p-2"
												/>
												<button
													className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
													onClick={() => togglePasswordVisibility("old")}
													type="button"
													aria-label={showPassword.old ? "Hide password" : "Show password"}
												>
													{showPassword.old ? (
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
															<line x1="1" y1="1" x2="23" y2="23"></line>
														</svg>
													) : (
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
															<circle cx="12" cy="12" r="3"></circle>
														</svg>
													)}
												</button>
											</div>
										</div>

										<div>
											<label className="block mb-1">New Password:</label>
											<div className="relative">
												<input
													type={showPassword.new ? "text" : "password"}
													className="w-full border border-gray-400 p-2"
												/>
												<button
													className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
													onClick={() => togglePasswordVisibility("new")}
													type="button"
													aria-label={showPassword.new ? "Hide password" : "Show password"}
												>
													{showPassword.new ? (
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
															<line x1="1" y1="1" x2="23" y2="23"></line>
														</svg>
													) : (
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
															<circle cx="12" cy="12" r="3"></circle>
														</svg>
													)}
												</button>
											</div>
										</div>

										<div>
											<label className="block mb-1">Retype Password:</label>
											<div className="relative">
												<input
													type={showPassword.retype ? "text" : "password"}
													className="w-full border border-gray-400 p-2"
												/>
												<button
													className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
													onClick={() => togglePasswordVisibility("retype")}
													type="button"
													aria-label={showPassword.retype ? "Hide password" : "Show password"}
												>
													{showPassword.retype ? (
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
															<line x1="1" y1="1" x2="23" y2="23"></line>
														</svg>
													) : (
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
															<circle cx="12" cy="12" r="3"></circle>
														</svg>
													)}
												</button>
											</div>
										</div>

										<button className="bg-blue-600 text-white py-1.5 px-4 hover:bg-blue-700">Change Password</button>
									</div>
								</div>
							)}
						</div>

						{/* Notification Section */}
						<div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="mr-3"
								>
									<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
									<line x1="12" y1="9" x2="12" y2="13"></line>
									<line x1="12" y1="17" x2="12.01" y2="17"></line>
								</svg>
								<span>Notification</span>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-gray-400"
							>
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default UserProfilePage;
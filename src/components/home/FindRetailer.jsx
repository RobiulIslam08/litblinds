"use client"
import { useState } from "react"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"

export default function FindRetailer() {
	const [selectedCountry, setSelectedCountry] = useState("USA")

	// Store data for different countries - this would typically come from an API
	const storeData = {
		USA: {
			country: "USA",
			storeName: "New York Paint",
			store: "Lit Blinds",
			address: "1587 1st Ave.",
			city: "Brooklyn Bridge",
			postalCode: "10028",
			region: "New York",
			distance: "12513.7 Km",
			travelTime: "208.56 Hrs",
			hours: "8:00 - 6:30",
			phone: "212-535-8400",
		},
		CANADA: {
			country: "CANADA",
			storeName: "Toronto Paint",
			store: "Lit Blinds",
			address: "123 Yonge St.",
			city: "Downtown",
			postalCode: "M5B 2H1",
			region: "Toronto",
			distance: "8520.3 Km",
			travelTime: "156.42 Hrs",
			hours: "9:00 - 7:00",
			phone: "416-555-1234",
		},
		UK: {
			country: "UK",
			storeName: "London Paint",
			store: "Lit Blinds",
			address: "45 Oxford St.",
			city: "Westminster",
			postalCode: "W1D 1BS",
			region: "London",
			distance: "5642.8 Km",
			travelTime: "98.35 Hrs",
			hours: "9:00 - 6:00",
			phone: "020-7123-4567",
		},
		EUROPE: {
			country: "EUROPE",
			storeName: "Paris Paint",
			store: "Lit Blinds",
			address: "15 Rue de Rivoli",
			city: "Central Paris",
			postalCode: "75001",
			region: "Paris",
			distance: "6234.5 Km",
			travelTime: "112.78 Hrs",
			hours: "8:30 - 7:30",
			phone: "01-23-45-67-89",
		},
		UAE: {
			country: "UAE",
			storeName: "Dubai Paint",
			store: "Lit Blinds",
			address: "123 Sheikh Zayed Rd",
			city: "Downtown",
			postalCode: "12345",
			region: "Dubai",
			distance: "10876.2 Km",
			travelTime: "187.32 Hrs",
			hours: "8:00 - 8:00",
			phone: "971-4-123-4567",
		},
		AUSTRALIA: {
			country: "AUSTRALIA",
			storeName: "Sydney Paint",
			store: "Lit Blinds",
			address: "42 George St",
			city: "The Rocks",
			postalCode: "2000",
			region: "Sydney",
			distance: "15623.8 Km",
			travelTime: "267.45 Hrs",
			hours: "9:00 - 5:30",
			phone: "02-9876-5432",
		},
		"NEW ZELAND": {
			country: "NEW ZELAND",
			storeName: "Auckland Paint",
			store: "Lit Blinds",
			address: "78 Queen St",
			city: "CBD",
			postalCode: "1010",
			region: "Auckland",
			distance: "14532.6 Km",
			travelTime: "243.87 Hrs",
			hours: "8:30 - 5:00",
			phone: "09-876-5432",
		},
		"Saudi Arabia": {
			country: "Saudi Arabia",
			storeName: "Riyadh Paint",
			store: "Lit Blinds",
			address: "123 King Fahd Rd",
			city: "Al Olaya",
			postalCode: "12345",
			region: "Riyadh",
			distance: "9876.5 Km",
			travelTime: "176.43 Hrs",
			hours: "9:00 - 6:00",
			phone: "966-11-123-4567",
		},
	}

	const currentStore = storeData[selectedCountry]

	return (
		<div className="my-2 md:my-3 lg:my-4">
			{/* heading */}
			<div className='text-center lg:pb-10 pb-5 pt-5 lg:pt-10'>
				<h1 className='text-lg lg:text-3xl font-bold text-[#222222]'>Explore Our Products</h1>

			</div>
			<div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

				{/* Find Online Section */}
				<div className="bg-white shadow-md">
					<div className="bg-[#000033] text-white p-4">
						<h2 className="text-xl font-bold">Find Online</h2>
					</div>
					<div className="grid grid-cols-2 gap-2 p-2">
						{/* Canada */}
						<div
							className={`border p-4 flex flex-col items-center justify-center cursor-pointer ${selectedCountry === "CANADA" ? "shadow-md bg-gray-100" : ""}`}
							onClick={() => setSelectedCountry("CANADA")}
						>
							<img
								src="https://litblinds.com/images/countryFlag/canada.jpeg"
								alt="Canada Flag"
								className="w-24 h-12 object-contain mb-2"
							/>
							<span className="font-bold">CANADA</span>
						</div>

						{/* USA */}
						<div
							className={`border p-4 flex flex-col items-center justify-center cursor-pointer ${selectedCountry === "USA" ? "shadow-md bg-gray-100" : ""}`}
							onClick={() => setSelectedCountry("USA")}
						>
							<img src="https://litblinds.com/images/countryFlag/usaFlag.png" alt="USA Flag" className="w-24 h-12 object-contain mb-2" />
							<span className="font-bold">USA</span>
						</div>

						{/* UK */}
						<div
							className={`border p-4 flex flex-col items-center justify-center cursor-pointer ${selectedCountry === "UK" ? "shadow-md bg-gray-100" : ""}`}
							onClick={() => setSelectedCountry("UK")}
						>
							<img src="https://litblinds.com/images/countryFlag/uk.png" alt="UK Flag" className="w-24 h-12 object-contain mb-2" />
							<span className="font-bold">UK</span>
						</div>

						{/* EUROPE */}
						<div
							className={`border p-4 flex flex-col items-center justify-center cursor-pointer ${selectedCountry === "EUROPE" ? "shadow-md bg-gray-100" : ""}`}
							onClick={() => setSelectedCountry("EUROPE")}
						>
							<img
								src="https://litblinds.com/images/countryFlag/EUROPE.png"
								alt="Europe Flag"
								className="w-24 h-12 object-contain mb-2"
							/>
							<span className="font-bold">EUROPE</span>
						</div>

						{/* UAE */}
						<div
							className={`border p-4 flex flex-col items-center justify-center cursor-pointer ${selectedCountry === "UAE" ? "shadow-md bg-gray-100" : ""}`}
							onClick={() => setSelectedCountry("UAE")}
						>
							<img src="https://litblinds.com/images/countryFlag/UAE.png" alt="UAE Flag" className="w-24 h-12 object-contain mb-2" />
							<span className="font-bold">UAE</span>
						</div>

						{/* AUSTRALIA */}
						<div
							className={`border p-4 flex flex-col items-center justify-center cursor-pointer ${selectedCountry === "AUSTRALIA" ? "shadow-md bg-gray-100" : ""}`}
							onClick={() => setSelectedCountry("AUSTRALIA")}
						>
							<img
								src="https://litblinds.com/images/countryFlag/AUSTRALIA.jpg"
								alt="Australia Flag"
								className="w-24 h-12 object-contain mb-2"
							/>
							<span className="font-bold">AUSTRALIA</span>
						</div>

						{/* NEW ZELAND */}
						<div
							className={`border p-4 flex flex-col items-center justify-center cursor-pointer ${selectedCountry === "NEW ZELAND" ? "shadow-md bg-gray-100" : ""}`}
							onClick={() => setSelectedCountry("NEW ZELAND")}
						>
							<img
								src="https://litblinds.com/images/countryFlag/NEW%20ZEALAND.png"
								alt="New Zealand Flag"
								className="w-24 h-12 object-contain mb-2"
							/>
							<span className="font-bold">NEW ZELAND</span>
						</div>

						{/* Saudi Arabia */}
						<div
							className={`border p-4 flex flex-col items-center justify-center cursor-pointer ${selectedCountry === "Saudi Arabia" ? "shadow-md bg-gray-100" : ""}`}
							onClick={() => setSelectedCountry("Saudi Arabia")}
						>
							<img
								src="https://litblinds.com/images/countryFlag/ksa.svg.png"
								alt="Saudi Arabia Flag"
								className="w-24 h-12 object-contain mb-2"
							/>
							<span className="font-bold">Saudi Arabia</span>
						</div>
					</div>
				</div>

				{/* Find Nearby Section */}
				<div className="bg-white shadow-md">
					<div className="bg-[#000033] text-white p-4">
						<h2 className="text-xl font-bold">Find Nearby</h2>
					</div>

					{/* Search Bar */}
					<div className="p-2 flex">
						<input
							type="text"
							placeholder="City, State Or Zip Code"
							className="flex-1 p-2 border border-gray-300 outline-none"
						/>
						<button className="bg-white border border-gray-300 border-l-0 p-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>

					{/* Map */}
					<div className="relative h-48 bg-gray-200">
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="text-gray-500">Google Map would be displayed here</div>
						</div>
						<div className="absolute bottom-2 left-2 flex space-x-4 text-xs">
							<button className="bg-white px-2 py-1 shadow">Map</button>
							<button className="bg-white px-2 py-1 shadow">Satellite</button>
						</div>
						<div className="absolute bottom-2 right-2">
							<button className="bg-white p-1 shadow">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
									/>
								</svg>
							</button>
						</div>
					</div>

					{/* Store Information */}
					<div className="p-4">
						<div className="text-center mb-4">
							<h2 className="text-2xl font-bold">{currentStore.country}</h2>
							<p className="font-semibold">•{currentStore.storeName}</p>
						</div>

						<h3 className="text-xl font-bold text-red-600 mb-2">{currentStore.store}</h3>

						<div className="space-y-2">
							<div className="flex items-start">
								<MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
								<div>
									<p>{currentStore.address}</p>
									<p>
										{currentStore.city}, {currentStore.postalCode}, {currentStore.region},{currentStore.country}
									</p>
								</div>
							</div>

							<div className="grid grid-cols-3 gap-2">
								<div className="flex items-center">
									<span className="font-bold mr-2">⟳</span>
									<span>{currentStore.distance}</span>
								</div>

								<div className="flex items-center">
									<span className="font-bold mr-2">⏱</span>
									<span>{currentStore.travelTime}</span>
								</div>

								<div className="flex items-center">
									<Navigation className="h-5 w-5 mr-1" />
									<span className="text-blue-600 font-medium">Direction</span>
								</div>
							</div>

							<div className="flex items-center">
								<Clock className="h-5 w-5 mr-2" />
								<div>
									<p className="text-gray-500">Open Today</p>
									<p>{currentStore.hours}</p>
								</div>
							</div>

							<div className="flex items-center">
								<Phone className="h-5 w-5 mr-2" />
								<span className="font-medium">{currentStore.phone}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

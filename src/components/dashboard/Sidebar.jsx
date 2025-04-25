import { FaQuestionCircle } from "react-icons/fa";


export default function Sidebar() {




	return (
		<div className="space-y-6 p-4 w-[320px]">
			{/* filter  */}
			<div className="flex justify-between items-center ">
				<p className="font-semibold text-primary text-lg">Filter By</p>
			
				<p className="bg-[#1e3b6f] text-white px-4 py-2 rounded-md text-sm font-medium shadow-md cursor-pointer border border-[#1e3b6f] transition-all duration-300 hover:bg-white hover:text-[#1e3b6f]">
  Clear All
</p>
			</div>
			<hr className="text-gray-400" />

			{/* chose your color */}
			<div>
				{/* header */}
				<div className="flex justify-between items-center mb-3">
					<h1 className="text-primary  font-semibold">Choose Your Color
					</h1>
					<FaQuestionCircle />
				</div>
				<div className="grid grid-cols-5 justify-items-center gap-2">
					<div className="w-12 h-10 border bg-green-700"></div>
					<div className="w-12 h-10 border bg-red-700"></div>
					<div className="w-12 h-10 border bg-blue-700"></div>
					<div className="w-12 h-10 border bg-pink-700"></div>
					<div className="w-12 h-10 border bg-yello-700"></div>
					<div className="w-12 h-10 border bg-orange-700"></div>
					<div className="w-12 h-10 border bg-lime-700"></div>
					<div className="w-12 h-10 border bg-rose-700"></div>
					<div className="w-12 h-10 border bg-emerald-700"></div>
					<div className="w-12 h-10 border bg-indigo-700"></div>
					<div className="w-12 h-10 border bg-neutral-700"></div>
				</div>
			</div>

			{/* Blinds Type */}
			<div>
				{/* header */}
				<div className="flex justify-between items-center mb-3">
					<h1 className="text-primary  font-semibold">Blinds Type
					</h1>
					<FaQuestionCircle />
				</div>

				{["Honeycomb-Cellular Shades", " Roller Blinds (21)", "Roman Blinds (34)", " Vertical Blinds (16)", " Wood Shades (16)", "Wood Shutter Blinds (18)", " Zebra Blinds (32)", "Custom Blinds (26)", "Curtains Drapes (6)"].map((type, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={type} className="h-4 w-4" />
						<label htmlFor={type} className="text-sm">{type}</label>
					</div>
				))}
			</div>

			{/* Light Control */}
			<div>
				{/* header */}
				<div className="flex justify-between items-center mb-3">
					<h1 className="text-primary  font-semibold">Light Control
					</h1>
					<FaQuestionCircle />
				</div>

				{["Blackout/Room Darkening (16)", " Light Filtering (19)"].map((type, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={type} className="h-4 w-4" />
						<label htmlFor={type} className="text-sm">{type}</label>
					</div>
				))}
			</div>

			{/* Room Types */}
			<div>
				{/* header */}
				<div className="flex justify-between items-center mb-3">
					<h1 className="text-primary  font-semibold">Room Types
					</h1>
					<FaQuestionCircle />
				</div>

				{["Nursery/Kids Rooms (10)", "Media Rooms (14)", "Living Rooms (25)", "Bathrooms (3)", "Bedrooms (16)", "Dining Rooms (20)"].map((type, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={type} className="h-4 w-4" />
						<label htmlFor={type} className="text-sm">{type}</label>
					</div>
				))}
			</div>

			{/* Lift Styles */}
			<div>
				{/* header */}
				<div className="flex justify-between items-center mb-3">
					<h1 className="text-primary  font-semibold">Lift Styles
					</h1>
					<FaQuestionCircle />
				</div>

				{["Cordless Lift (31)", "Continuous Cord Loop (18)"].map((type, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={type} className="h-4 w-4" />
						<label htmlFor={type} className="text-sm">{type}</label>
					</div>
				))}
			</div>
			{/* Motorization */}
			<div>
				{/* header */}
				<div className="flex justify-between items-center mb-3">
					<h1 className="text-primary  font-semibold">Motorization
					</h1>
					<FaQuestionCircle />
				</div>

				{["Motorized w/ Remote (26)", "Motorized w/ Wand (11)","Smart Home Hub (31)"].map((type, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={type} className="h-4 w-4" />
						<label htmlFor={type} className="text-sm">{type}</label>
					</div>
				))}
			</div>

			{/* Upgrades */}
			<div>
				{/* header */}
				<div className="flex justify-between items-center mb-3">
					<h1 className="text-primary  font-semibold">Upgrades
					</h1>
					<FaQuestionCircle />
				</div>

				{["No-Drill Blinds (15)"].map((type, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={type} className="h-4 w-4" />
						<label htmlFor={type} className="text-sm">{type}</label>
					</div>
				))}
			</div>
			{/* Specialty */}
			<div>
				{/* header */}
				<div className="flex justify-between items-center mb-3">
					<h1 className="text-primary  font-semibold">Specialty
					</h1>
					<FaQuestionCircle />
				</div>

				{['Under 24" (24)','1" Or Less Depth (5)','Over 90" (24)'].map((type, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={type} className="h-4 w-4" />
						<label htmlFor={type} className="text-sm">{type}</label>
					</div>
				))}
			</div>


		</div>
	)
}

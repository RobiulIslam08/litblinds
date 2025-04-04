"use client"

import { useState } from "react"

export default function Sidebar() {
	const [priceRange, setPriceRange] = useState([0, 1000])

	const handleRangeChange = (e, index) => {
		const newRange = [...priceRange]
		newRange[index] = parseInt(e.target.value)
		setPriceRange(newRange)
	}

	return (
		<div className="space-y-6 p-4">
			{/* Price Range */}
			<div>
				<h3 className="mb-3 text-lg font-semibold">Price Range</h3>
				<div className="flex items-center gap-2">
					<input
						type="range"
						min={0}
						max={1000}
						step={10}
						value={priceRange[0]}
						onChange={(e) => handleRangeChange(e, 0)}
						className="w-full"
					/>
					<input
						type="range"
						min={0}
						max={1000}
						step={10}
						value={priceRange[1]}
						onChange={(e) => handleRangeChange(e, 1)}
						className="w-full"
					/>
				</div>
				<div className="flex justify-between text-sm text-muted-foreground mt-1">
					<span>${priceRange[0]}</span>
					<span>${priceRange[1]}</span>
				</div>
			</div>

			{/* Wallpaper Type */}
			<div>
				<h3 className="mb-3 text-lg font-semibold">Wallpaper Type</h3>
				{["Vinyl", "Paper", "Fabric", "Peel & Stick"].map((type, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={type} className="h-4 w-4" />
						<label htmlFor={type} className="text-sm">{type}</label>
					</div>
				))}
			</div>

			{/* Pattern */}
			<div>
				<h3 className="mb-3 text-lg font-semibold">Pattern</h3>
				{["Floral", "Geometric", "Abstract", "Stripes"].map((pattern, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={pattern} className="h-4 w-4" />
						<label htmlFor={pattern} className="text-sm">{pattern}</label>
					</div>
				))}
			</div>

			{/* Furniture Type */}
			<div>
				<h3 className="mb-3 text-lg font-semibold">Furniture Type</h3>
				{["Sofa", "Chair", "Table", "Bed"].map((item, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={item} className="h-4 w-4" />
						<label htmlFor={item} className="text-sm">{item}</label>
					</div>
				))}
			</div>

			{/* Decor Type */}
			<div>
				<h3 className="mb-3 text-lg font-semibold">Decor Type</h3>
				{["Vase", "Picture Frame", "Candle", "Cushion"].map((decor, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={decor} className="h-4 w-4" />
						<label htmlFor={decor} className="text-sm">{decor}</label>
					</div>
				))}
			</div>

			{/* Color */}
			<div>
				<h3 className="mb-3 text-lg font-semibold">Color</h3>
				{["Black", "White", "Gray", "Beige", "Green", "Blue"].map((color, idx) => (
					<div key={idx} className="flex items-center space-x-2">
						<input type="checkbox" id={color} className="h-4 w-4" />
						<label htmlFor={color} className="text-sm">{color}</label>
					</div>
				))}
			</div>
		</div>
	)
}

import React from 'react';

const Guide = () => {
	return (
		<div className=" p-4 border border-gray-200 bg-gray-50 rounded-md">
			<h1 className="text-2xl font-medium text-gray-900 mb-3">Window Blinds - Measure & Install Guide</h1>

			<p className="text-gray-700 mb-5">Here Is A Comprehensive Guide On How To Measure And Install Window Blinds:</p>

			{/* Measuring Section */}
			<section className="mb-5">
				<h2 className="text-xl font-medium text-gray-900 mb-2">Measuring Window Blinds</h2>

				<p className="text-gray-700 mb-3">Measuring Window Blinds Correctly Is Crucial. Follow These Steps:</p>

				<p className="text-gray-700 mb-3">
					Inside Vs. Outside Mount Width And Height Measurements Measuring For Multiple Windows Here's A Visual Guide To
					Help You Understand The Process:
				</p>
			</section>

			{/* Installing Section */}
			<section className="mb-5">
				<h2 className="text-xl font-medium text-gray-900 mb-2">Installing Window Blinds</h2>

				<p className="text-gray-700 mb-3">
					Proper Installation Ensures A Perfect Fit And Functionality. Follow These Steps:
				</p>

				<p className="text-gray-700 mb-3">
					Required Tools And Materials Mounting The Brackets Attaching The Blinds Testing And Adjusting For Visual
					Guidance, Refer To These Illustrations:
				</p>
			</section>

			{/* Cleaning Section */}
			<section className="mb-5">
				<h2 className="text-xl font-medium text-gray-900 mb-2">Cleaning And Maintenance</h2>

				<p className="text-gray-700 mb-3">Maintain Your Window Blinds For Longer Durability:</p>

				<p className="text-gray-700 mb-3">
					Regular Dusting And Cleaning Spot Cleaning For Stains Preventative Maintenance Tips These Images Illustrate
					The Process:
				</p>
			</section>
		</div>
	);
};

export default Guide;
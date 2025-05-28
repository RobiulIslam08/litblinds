/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState } from 'react';
// import insideImage from '../../assets/images/windowBlindsSinglePage/inside.jpg';
// import reverseRoll from '../../assets/images/windowBlindsSinglePage/reversRoll.jpg';
// import headrailBothImage from '../../assets/images/windowBlindsSinglePage/headrailLiftBothImage.jpg';
// import headrailLiftPosition from '../../assets/images/windowBlindsSinglePage/headrailLiftPositionImage.jpg';

// const HeadrailOption = () => {
// 	const options = ['12', '24', '36'];

// 	const [leftTop, setLeftTop] = useState('12');
// 	const [leftBottom, setLeftBottom] = useState('24');
// 	const [rightTop, setRightTop] = useState('12');
// 	const [rightBottom, setRightBottom] = useState('24');
// 	const [selectedSide, setSelectedSide] = useState('');

// 	// 👉 Control which option is active
// 	const [selectedOption, setSelectedOption] = useState('standard'); // default: 'standard' or 'reverse'

// 	return (
// 		<div>
// 			<div>
// 				<p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Headrail Options</p>
// 				<hr className='text-gray-400 mb-3 lg:mb-4' />

// 				<div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>

// 					{/* ✅ Standard Roll */}
// 					<div
// 						onClick={() => setSelectedOption('standard')}
// 						className={`cursor-pointer border p-2 rounded ${selectedOption === 'standard' ? 'ring-2 ring-blue-600' : ''}`}
// 					>
// 						<img src={insideImage} alt="Standard Roll" />
// 						<p className='text-primary text-sm mt-1'>Standard Roll</p>
// 						<p className='text-primary text-sm'>$ 1</p>
// 					</div>

// 					{/* ✅ Reverse Roll */}
// 					<div
// 						onClick={() => setSelectedOption('reverse')}
// 						className={`cursor-pointer border p-2 rounded ${selectedOption === 'reverse' ? 'ring-2 ring-blue-600' : ''}`}
// 					>
// 						<img src={reverseRoll} alt="Reverse Roll" />
// 						<p className='text-primary text-sm mt-1'>Reverse Roll</p>
// 						<p className='text-primary text-sm'>$ 1</p>
// 					</div>

// 					{/* ✅ Conditional Content */}
// 					{selectedOption === 'standard' && (
// 						<div className='col-span-2 lg:col-span-1'>
// 							<img src={headrailBothImage} alt="Headrail Both" />
// 							<p>Width</p>

// 							{/* Left Side */}
// 							<div>
// 								<p>Left</p>
// 								<div className='flex gap-2'>
// 									<select
// 										value={leftTop}
// 										onChange={(e) => setLeftTop(e.target.value)}
// 										className="w-10 px-1 py-2 text-xs border rounded bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
// 									>
// 										<option value="">--</option>
// 										{options.map((option, idx) => (
// 											<option key={idx} value={option}>{option}</option>
// 										))}
// 									</select>
// 									<select
// 										value={leftBottom}
// 										onChange={(e) => setLeftBottom(e.target.value)}
// 										className="w-10 px-1 py-2 text-xs border rounded bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
// 									>
// 										<option value="">--</option>
// 										{options.map((option, idx) => (
// 											<option key={idx} value={option}>{option}</option>
// 										))}
// 									</select>
// 								</div>
// 							</div>

// 							{/* Right Side */}
// 							<div className='mt-2'>
// 								<p>Right</p>
// 								<div className='flex gap-2'>
// 									<select
// 										value={rightTop}
// 										onChange={(e) => setRightTop(e.target.value)}
// 										className="w-10 px-1 py-2 text-xs border rounded bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
// 									>
// 										<option value="">--</option>
// 										{options.map((option, idx) => (
// 											<option key={idx} value={option}>{option}</option>
// 										))}
// 									</select>
// 									<select
// 										value={rightBottom}
// 										onChange={(e) => setRightBottom(e.target.value)}
// 										className="w-10 px-1 py-2 text-xs border rounded bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
// 									>
// 										<option value="">--</option>
// 										{options.map((option, idx) => (
// 											<option key={idx} value={option}>{option}</option>
// 										))}
// 									</select>
// 								</div>
// 							</div>
// 						</div>
// 					)}

// 					{/* ✅ Reverse Roll Conditional Content */}
// 					{selectedOption === 'reverse' && (
// 						<div className='col-span-2 lg:col-span-1 '>
// 							<img src={headrailLiftPosition} alt="Headrail Lift Position " className={`w-full transition-transform duration-500 ${selectedSide === 'right' ? 'rotate-180 translate-x-2' : ''
// 								}`} />
// 							<select
// 								value={selectedSide}
// 								onChange={(e) => setSelectedSide(e.target.value)}
// 								className="w-full px-3 py-2 text-sm border rounded bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
// 							>
// 								<option value="">Lift Position</option>
// 								<option value="left">Left</option>
// 								<option value="right">Right</option>
// 							</select>
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default HeadrailOption;

import React, { useState, useEffect } from 'react';
import insideImage from '../../assets/images/windowBlindsSinglePage/inside.jpg';
import reverseRoll from '../../assets/images/windowBlindsSinglePage/reversRoll.jpg';
import headrailBothImage from '../../assets/images/windowBlindsSinglePage/headrailLiftBothImage.jpg';
import headrailLiftPosition from '../../assets/images/windowBlindsSinglePage/headrailLiftPositionImage.jpg';

// Receive setHeadrailOptionsPrice as a prop
const HeadrailOption = ({ setHeadrailOptionsPrice }) => {
    // These options could have individual prices if needed.
    // For now, let's assume selecting 'standard' or 'reverse' has a base price of 1,
    // and the dropdowns also contribute to the price in the Headrail component.
    // Given previous context, HEADRAIL_ITEM_PRICE from parent might be used for specific selections.
    // If HeadrailOption itself implies a base cost for the *type* of headrail.
    const headrailTypeOptions = [
        { label: 'Standard Roll', value: 'standard', price: 1.00, image: insideImage },
        { label: 'Reverse Roll', value: 'reverse', price: 1.00, image: reverseRoll },
    ];

    const [selectedOption, setSelectedOption] = useState('standard'); // default: 'standard' or 'reverse'

    // This state will track the sum of prices from the dropdowns *within* HeadrailOption
    // If these dropdowns are for visual selection only and Headrail handles price, this will be 0.
    // Given the structure, it seems like these dropdowns here are for specific adjustments to the headrail itself.
    // Let's assume selecting any value in these dropdowns adds a price (e.g., $0.50 per selected item)
    const DROPDOWN_ITEM_PRICE = 0.50; // Price for each selected dropdown item (per unit)

    const options = ['12', '24', '36']; // Options for dropdowns

    const [leftTop, setLeftTop] = useState(''); // Changed default to empty for optional selection
    const [leftBottom, setLeftBottom] = useState('');
    const [rightTop, setRightTop] = useState('');
    const [rightBottom, setRightBottom] = useState('');
    const [selectedSide, setSelectedSide] = useState(''); // For reverse roll lift position

    // Effect to calculate and report the price for HeadrailOption selections
    useEffect(() => {
        let currentHeadrailOptionPrice = 0;

        // Add price for the selected roll type (standard or reverse)
        const selectedHeadrailType = headrailTypeOptions.find(opt => opt.value === selectedOption);
        if (selectedHeadrailType) {
            currentHeadrailOptionPrice += selectedHeadrailType.price;
        }

        // Add price for each selected dropdown option
        if (leftTop !== '') currentHeadrailOptionPrice += DROPDOWN_ITEM_PRICE;
        if (leftBottom !== '') currentHeadrailOptionPrice += DROPDOWN_ITEM_PRICE;
        if (rightTop !== '') currentHeadrailOptionPrice += DROPDOWN_ITEM_PRICE;
        if (rightBottom !== '') currentHeadrailOptionPrice += DROPDOWN_ITEM_PRICE;
        
        // If 'reverse' roll is selected and a side is chosen, does it add price?
        // Assuming not for now, but can be added: if (selectedSide !== '') currentHeadrailOptionPrice += SOME_PRICE;


        setHeadrailOptionsPrice(currentHeadrailOptionPrice); // Report the per-unit price to parent

    }, [
        selectedOption, 
        leftTop, 
        leftBottom, 
        rightTop, 
        rightBottom, 
        selectedSide, // Include all relevant states that affect its price
        setHeadrailOptionsPrice, // Setter function is a dependency
        DROPDOWN_ITEM_PRICE,
        headrailTypeOptions
    ]);

    return (
        <div>
            <div>
                <p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Headrail Options</p>
                <hr className='text-gray-400 mb-3 lg:mb-4' />

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>

                    {/* ✅ Standard Roll */}
                    <div
                        onClick={() => setSelectedOption('standard')}
                        className={`cursor-pointer border p-2 rounded ${selectedOption === 'standard' ? 'ring-2 ring-blue-600' : ''}`}
                    >
                        <img src={headrailTypeOptions[0].image} alt={headrailTypeOptions[0].label} />
                        <p className='text-primary text-sm mt-1'>{headrailTypeOptions[0].label}</p>
                        <p className='text-primary text-sm'>${headrailTypeOptions[0].price.toFixed(2)}</p>
                    </div>

                    {/* ✅ Reverse Roll */}
                    <div
                        onClick={() => setSelectedOption('reverse')}
                        className={`cursor-pointer border p-2 rounded ${selectedOption === 'reverse' ? 'ring-2 ring-blue-600' : ''}`}
                    >
                        <img src={headrailTypeOptions[1].image} alt={headrailTypeOptions[1].label} />
                        <p className='text-primary text-sm mt-1'>{headrailTypeOptions[1].label}</p>
                        <p className='text-primary text-sm'>${headrailTypeOptions[1].price.toFixed(2)}</p>
                    </div>

                    {/* ✅ Conditional Content for Standard Roll */}
                    {selectedOption === 'standard' && (
                        <div className='col-span-2 lg:col-span-1'>
                            <img src={headrailBothImage} alt="Headrail Both" />
                            <p>Width</p>

                            {/* Left Side Dropdowns */}
                            <div>
                                <p>Left</p>
                                <div className='flex gap-2'>
                                    <select
                                        value={leftTop}
                                        onChange={(e) => setLeftTop(e.target.value)}
                                        className="w-10 px-1 py-2 text-xs border rounded bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                                    >
                                        <option value="">--</option>
                                        {options.map((option, idx) => (
                                            <option key={idx} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    <select
                                        value={leftBottom}
                                        onChange={(e) => setLeftBottom(e.target.value)}
                                        className="w-10 px-1 py-2 text-xs border rounded bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                                    >
                                        <option value="">--</option>
                                        {options.map((option, idx) => (
                                            <option key={idx} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Right Side Dropdowns */}
                            <div className='mt-2'>
                                <p>Right</p>
                                <div className='flex gap-2'>
                                    <select
                                        value={rightTop}
                                        onChange={(e) => setRightTop(e.target.value)}
                                        className="w-10 px-1 py-2 text-xs border rounded bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                                    >
                                        <option value="">--</option>
                                        {options.map((option, idx) => (
                                            <option key={idx} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    <select
                                        value={rightBottom}
                                        onChange={(e) => setRightBottom(e.target.value)}
                                        className="w-10 px-1 py-2 text-xs border rounded bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                                    >
                                        <option value="">--</option>
                                        {options.map((option, idx) => (
                                            <option key={idx} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ✅ Reverse Roll Conditional Content */}
                    {selectedOption === 'reverse' && (
                        <div className='col-span-2 lg:col-span-1 '>
                            <img
                                src={headrailLiftPosition}
                                alt="Headrail Lift Position"
                                className={`w-full transition-transform duration-500 ${selectedSide === 'right' ? 'rotate-180 translate-x-2' : ''}`}
                            />
                            <select
                                value={selectedSide}
                                onChange={(e) => setSelectedSide(e.target.value)}
                                className="w-full px-3 py-2 text-sm border rounded bg-white text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                            >
                                <option value="">Lift Position</option>
                                <option value="left">Left</option>
                                <option value="right">Right</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeadrailOption;
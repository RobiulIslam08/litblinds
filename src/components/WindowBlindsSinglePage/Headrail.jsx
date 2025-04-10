import React, { useState } from 'react';
import insideImage from '../../assets/images/windowBlindsSinglePage/inside.jpg';
import reverseRoll from '../../assets/images/windowBlindsSinglePage/reversRoll.jpg';
import headrailBothImage from '../../assets/images/windowBlindsSinglePage/headrailLiftBothImage.jpg';
import headrailLiftPosition from '../../assets/images/windowBlindsSinglePage/headrailLiftPositionImage.jpg';

const Headrail = () => {
	const options = ['12', '24', '36'];

	const [leftTop, setLeftTop] = useState('12');
	const [leftBottom, setLeftBottom] = useState('24');
	const [rightTop, setRightTop] = useState('12');
	const [rightBottom, setRightBottom] = useState('24');
	const [selectedSide, setSelectedSide] = useState('');

	// 👉 Control which option is active
	const [selectedOption, setSelectedOption] = useState('standard'); // default: 'standard' or 'reverse'

	return (
		<div>
			<div>
				<p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Headrail Options</p>
				<hr className='text-gray-400 mb-3 lg:mb-4' />

				<div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>

					{/* ✅ Standard Roll */}
					<div
						onClick={() => setSelectedOption('standard')}
						className={`cursor-pointer border p-2 rounded ${selectedOption === 'standard' ? 'ring-2 ring-primary' : ''}`}
					>
						<img src={insideImage} alt="Standard Roll" />
						<p className='text-primary text-sm mt-1'>Standard Roll</p>
						<p className='text-primary text-sm'>$ 1</p>
					</div>

					{/* ✅ Reverse Roll */}
					<div
						onClick={() => setSelectedOption('reverse')}
						className={`cursor-pointer border p-2 rounded ${selectedOption === 'reverse' ? 'ring-2 ring-primary' : ''}`}
					>
						<img src={reverseRoll} alt="Reverse Roll" />
						<p className='text-primary text-sm mt-1'>Reverse Roll</p>
						<p className='text-primary text-sm'>$ 1</p>
					</div>

					{/* ✅ Conditional Content */}
					{selectedOption === 'standard' && (
						<div className='col-span-2 lg:col-span-1'>
							<img src={headrailBothImage} alt="Headrail Both" />
							<p>Width</p>

							{/* Left Side */}
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

							{/* Right Side */}
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
							<img src={headrailLiftPosition} alt="Headrail Lift Position " className={`w-full transition-transform duration-500 ${selectedSide === 'right' ? 'rotate-180 translate-x-2' : ''
								}`} />
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

export default Headrail;

import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/windowBlindsSinglePage/82_0.jpg';
import img2 from '../assets/images/windowBlindsSinglePage/82_1.jpg';
import { FaHeart, FaPlayCircle, FaShareAlt, FaStar } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import insideImage from '../assets/images/windowBlindsSinglePage/inside.jpg'
import defaultWidth from '../assets/images/windowBlindsSinglePage/Default_Width.jpg'
import defaultHeight from '../assets/images/windowBlindsSinglePage/Default_Height.jpg'
import QuantityCounter from '../components/QuantityCounter';
import lifeStyleimage1 from '../assets/images/windowBlindsSinglePage/lifeStyle1.jpg'
import lifeStyleimage2 from '../assets/images/windowBlindsSinglePage/lifeStyle2.jpg'
import lifeStyleimage3 from '../assets/images/windowBlindsSinglePage/lifeStyle3.jpg'
import Headrail from '../components/WindowBlindsSinglePage/Headrail';
import RollPositon from '../components/WindowBlindsSinglePage/RollPositon';

const WindowBlindsSinglePage = () => {
	const [selectedImg, setSelectedImg] = useState(img1);

	// Add these states at the top of your component
	const [wholeInches, setWholeInches] = useState(15);
	const [fraction, setFraction] = useState(0);
	const [totalCm, setTotalCm] = useState('');

	const [wholeInchesHeight, setWholeInchesHeight] = useState(15);
	const [fractionHeight, setFractionHeight] = useState(0);
	const [totalCmHeight, setTotalCmHeight] = useState('');

	// Conversion function for width
	useEffect(() => {
		const totalInches = wholeInches + fraction;
		const cm = (totalInches * 2.54).toFixed(1);
		setTotalCm(cm);
	}, [wholeInches, fraction]);

	// Conversion function for height
	useEffect(() => {
		const totalInches = wholeInchesHeight + fractionHeight;
		const cm = (totalInches * 2.54).toFixed(1);
		setTotalCmHeight(cm);
	}, [wholeInchesHeight, fractionHeight]);

	return (
		<div className='flex flex-col lg:flex-row items-center justify-center gap-8 my-3 lg:my-5'>
			{/* Left Side */}
			<div className='w-full lg:w-[30%] mt-6'>
				<img src={selectedImg} alt="Main" className='rounded-md w-full h-[200px]' />

				<div className='flex gap-3 mt-5'>
					<img
						src={img1}
						alt="thumb1"
						onClick={() => setSelectedImg(img1)}
						className={`w-[60px] h-[60px] object-cover rounded-md cursor-pointer border-2 ${selectedImg === img1 ? 'border-blue-500' : 'border-transparent'}`}
					/>
					<img
						src={img2}
						alt="thumb2"
						onClick={() => setSelectedImg(img2)}
						className={`w-[60px] h-[60px] object-cover rounded-md cursor-pointer border-2 ${selectedImg === img2 ? 'border-blue-500' : 'border-transparent'}`}
					/>
				</div>
			</div>

			{/* Right Side */}
			<div className='w-full lg:w-[70%] '>
				{/* price section*/}
				<div className='border border-gray-400 rounded-md flex flex-col lg:flex-row items-center gap-10 p-4'>
					{/* add to cart, color for this  */}
					<div className='w-full lg:w-[60%]'>
						{/* star */}
						<div className='flex items-center gap-1 text-xs'>
							<FaStar className='text-yellow-400'></FaStar>
							<FaStar className='text-yellow-400'></FaStar>
							<FaStar className='text-yellow-400'></FaStar>
							<FaStar className='text-yellow-400'></FaStar>
							<FaStar className='text-yellow-400'></FaStar>
							<p className='text-lg font-semibold text-gray-500'>5.0</p>
						</div>
						<h1 className='text-primary font-bold '>Persianas De Ventana</h1>
						<p className='text-xl font-bold text-primary mb-4'>$130</p>

						{/* cart, buy, heard, share button*/}
						<div className='flex flex-wrap items-center gap-2'>
							<button className='border border-blue-500 px-3 py-1 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition ease-in-outrounded-md'>Add To Cart</button>
							<button className='border border-blue-500 px-3 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 text-white transition ease-in-outrounded-md'>Add To Cart</button>
							<FaHeart className="border border-blue-500 px-3 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 transition ease-in-out h-9 w-9  cursor-pointer text-white rounded-md" />

							<FaShareAlt className="border border-blue-500 px-3 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 transition ease-in-out h-9 w-9 rounded-md cursor-pointer text-white " />
						</div>
						<hr className='text-gray-300 mt-4 mb-5' />

						{/* color */}
						<div className='mb-4'>
							<h1 className='text-primary font-semibold mb-2'>Colors</h1>
							<div className='flex items-center gap-1'>
								<div className='h-6 w-6 rounded bg-[#ff0000]'></div>
								<div className='h-6 w-6 rounded bg-[#fb0b0b]'></div>
								<div className='h-6 w-6 rounded bg-blue-700'></div>
								<div className='h-6 w-6 rounded bg-green-700'></div>
								<div className='h-6 w-6 rounded bg-black'></div>
							</div>
						</div>
						<p className='text-primary font-semibold'>Delivery in Canada 7-14 days</p>
					</div>
					{/* price for this */}
					<div className='w-full lg:w-[40%]'>
						<div className='bg-[#d4d4d4] p-4 rounded-md'>
							{/* unit price */}
							<div className='flex justify-between items-center'>
								<p className='text-red font-bold text-[17px]'>Unit Price:</p>
								<p className='text-orange font-bold text-[17px]'>130</p>
							</div>
							{/* you save */}
							<div className='flex justify-between items-center my-5'>
								<p className='text-red font-bold text-[17px]'>You Save:</p>
								<p className='text-orange font-bold text-[17px]'>70</p>
							</div>
							{/* Shipping Fee */}
							<div className='flex justify-between items-center mb-6'>
								<p className='text-red font-bold text-[17px]'>Shipping Fee:</p>
								<p className='text-orange font-bold text-[17px]'>10</p>
							</div>
							<hr className='text-gray-400 mb-4' />
							{/* Sale Price */}
							<div className='flex justify-between items-center mb-4'>
								<p className='text-red font-bold text-[17px]'>Sale Price:</p>
								<p className='text-orange font-bold text-[17px]'>$130</p>
							</div>
						</div>
						<button className='bg-red-500 hover:bg-red-600 w-full rounded-md my-3 text-white font-bold py-2'>Customize & Buy</button>
					</div>

				</div>

				{/* slect color, size, features, warrenty option */}
				<div className='border p-4   border-gray-400 mt-3'>
					{/* select color */}
					<div>
						<button className='md:text-base text-xs py-2 font-semibold text-left w-full text-white bg-[#2c2c2c] px-5'>Select Color</button>
						<p className='text-sm py-3'>Classic Collection | Add:$ 5</p>
						<hr className='text-gray-400 pb-3' />
						{/* first six color card */}
						<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center space-y-20'>

							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#f5f5f0] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>White Horse</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>
							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#d1cbb8] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>Polar Bear</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>
							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#6b707a] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>Seal Gray</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>
							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#54565a] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>White Gray</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>
							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#454449] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>Black</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>
							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#4d423f] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>Beaver Tail</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>

						</div>

						{/* second six color card */}
						<p className='text-sm py-3'>Classic Collection | Add:$ 5</p>
						<hr className='text-gray-400 pb-3' />
						<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center space-y-20'>

							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#cfcbc8] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>Sea Salt</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>
							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#b2a7a6] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>Gray Salt</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>
							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#bdb7b3] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>Pabble</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>
							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#89817d] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>Grabbel</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>
							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#88807a] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>Stone</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>
							{/* color item */}
							<div className='w-[100px] h-[100px] md:w-28 md:h-28'>
								<p className='bg-[#6e6362] w-full h-full border border-gray-300'></p>
								<p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>Rock Salt</p>
								<button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
							</div>

						</div>




					</div>
					{/* select size,mount type and quality */}
					<div>
						{/* button */}
						<div className='flex items-center justify-between py-2 font-semibold text-left w-full text-white bg-[#2c2c2c] px-5'>
							<p className='text-xs md:text-lg'>Select Size, Mount Type & Quality</p>
							<div className='flex items-center gap-1 justify-center'>
								<p className='text-xs md:text-lg'>W:18"</p>
								<p className='text-xs md:text-lg'>H:24"</p>
							</div>
						</div>
						{/* mount type */}
						<p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Mount Type</p>
						<hr className='text-gray-400 ' />
						{/* inside, outside and text */}
						<div className='flex flex-col lg:flex-row justify-center gap-2 lg:gap-7 mt-2 lg:mt-3'>
							<div className='flex items-center justify-center gap-2 w-full lg:w-[50%]'>
								{/* inside */}
								<div>
									<img src={insideImage} alt="insideImage" className='' />
									<p className='text-center text-primary text-sm'>Inside</p>
								</div>
								{/* outside */}
								<div>
									<img src={insideImage} alt="outsitedImage" srcset="" className='' />
									<p className='text-center text-primary text-sm'>Outside</p>
								</div>
							</div>
							{/* right side text */}
							<p className='w-full lg:w-[50%] text-sm'><span className='font-bold text-xs'>NOTE:</span> Inside mounted blackout shades will have light gaps coming into the room from the edges of the shade. Please order outside mounted blackout shades if you prefer a higher level of blackout.</p>

						</div>


						{/* Enter Measurements */}
						<p className='text-primary text-sm mt-5 md:mt-7 lg:mt-9'>Enter Measurements</p>
						<hr className='text-gray-400 ' />
						<p className='font-bold transition ease-in-out hover:text-blue-600 mt-3 lg:mt-4 cursor-pointer duration-300'>Tip: Measure & Install</p>
						<div className='flex justify-between items-center gap-10'>
							<div className='flex flex-col lg:flex-row gap-2 items-center justify-between'>
								{/* imagge */}
								<div>
									<img src={defaultWidth} alt="" className='lg:w-[200px] w-full' />
								</div>
								{/* width */}
								<div className="ml-4">
									<div className="flex flex-col  gap-2">
										<p className='text-sm text-primary'>Width (inches)</p>
										{/* Whole inches dropdown */}
										<select
											value={wholeInches}
											onChange={(e) => setWholeInches(Number(e.target.value))}
											className="border p-1 rounded-md w-24 lg:w-40"
										>
											{Array.from({ length: 129 }, (_, i) => 15 + i).map((num) => (
												<option key={num} value={num}>{num}"</option>
											))}
										</select>

										{/* Fraction dropdown */}
										<select
											value={fraction}
											onChange={(e) => setFraction(Number(e.target.value))}
											className="border p-1 rounded-md w-24 lg:w-40"
										>
											{[0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875].map((frac) => (
												<option key={frac} value={frac}>
													{frac === 0 ? '0' : `${(frac * 8).toFixed(0)}/8`}
												</option>
											))}
										</select>

										<span className="text-sm font-bold text-primary">Size CM: {totalCm}</span>
									</div>
								</div>
							</div>
							<div className='flex flex-col lg:flex-row gap-2 items-center justify-between'>
								{/* imagge */}
								<div>
									<img src={defaultHeight} alt="" className='lg:w-[200px] md:w-full' />
								</div>
								{/* height */}
								<div className="ml-4">
									<div className="flex flex-col  gap-2">
										<p className='text-sm text-primary'>Width (inches)</p>
										{/* Whole inches dropdown */}
										<select
											value={wholeInchesHeight}
											onChange={(e) => setWholeInchesHeight(Number(e.target.value))}
											className="border p-1 rounded-md w-24 lg:w-40"
										>
											{Array.from({ length: 129 }, (_, i) => 15 + i).map((num) => (
												<option key={num} value={num}>{num}"</option>
											))}
										</select>

										{/* Fraction dropdown */}
										<select
											value={fractionHeight}
											onChange={(e) => setFractionHeight(Number(e.target.value))}
											className="border p-1 rounded-md w-24 lg:w-40"
										>
											{[0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875].map((frac) => (
												<option key={frac} value={frac}>
													{frac === 0 ? '0' : `${(frac * 8).toFixed(0)}/8`}
												</option>
											))}
										</select>

										<span className="text-sm font-bold text-primary">Size CM: {totalCmHeight}</span>
									</div>
								</div>
							</div>
						</div>


					</div>

					{/* quantity */}
					<div>
						<p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Quantity</p>
						<hr className='text-gray-400 ' />
						<QuantityCounter></QuantityCounter>

					</div>

					{/* Room Name */}
					<div>
						<p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Room Name</p>
						<hr className='text-gray-400 ' />
						<input type="text" className='border border-gray-400 rounded-md outline-none px-3 py-1 mt-2 md:mt-3' />
					</div>

					{/* Select Features */}
					<div>
						<button className='text-xs md:text-base py-2 font-semibold text-left w-full text-white bg-[#2c2c2c] px-5 mt-3 md:mt-4'>Select Features</button>
						<p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Life Style</p>
						<hr className='text-gray-400 ' />
						{/* life style 3 card */}
						<div className='grid grid-cols-2 lg:grid-cols-3 gap-5 mt-3 md:mt-4 '>
							{/* one */}
							<div>
								<img src={lifeStyleimage1} alt="" className='w-full' />
								<div className='flex justify-between items-center'>
									<div className='flex flex-col'>
										<p className='font-semibold'>Chain Guard</p>
										<p>$ 2</p>
									</div>
									<FaPlayCircle className='border border-blue-500 px-1 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 transition ease-in-out h-7 w-7  cursor-pointer text-white rounded-md ' />

								</div>
							</div>
							{/* two*/}
							<div>
								<img src={lifeStyleimage2} alt="" className='w-full' />
								<div className='flex justify-between items-center'>
									<div className='flex flex-col'>
										<p className='font-semibold'>Cordless Lift</p>
										<p>$ 2</p>
									</div>
									<FaPlayCircle className='border border-blue-500 px-1 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 transition ease-in-out h-7 w-7  cursor-pointer text-white rounded-md ' />
								</div>
							</div>
							{/* three */}
							<div>
								<img src={lifeStyleimage3} alt="" className='w-full' />
								<div className='flex justify-between items-center'>
									<div className='flex flex-col'>
										<p className='font-semibold'>Motorization</p>
										<p>$ 3</p>
									</div>
									<FaPlayCircle className='border border-blue-500 px-1 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 transition ease-in-out h-7 w-7  cursor-pointer text-white rounded-md ' />

								</div>
							</div>
						</div>

					</div>

					{/* headrail option */}
					<Headrail></Headrail>

					{/* roll position */}
					<RollPositon></RollPositon>



				</div>

			</div>
		</div>
	);
};

export default WindowBlindsSinglePage;

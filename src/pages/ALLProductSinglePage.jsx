
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
import HeadrailOption from '../components/WindowBlindsSinglePage/HeadrailOption';
import RollPositon from '../components/WindowBlindsSinglePage/RollPositon';
import Headrail from '../components/WindowBlindsSinglePage/Headrail';
import WarrentyOtion from '../components/WarrentyOtion';
import ProductTabs from '../components/ProductTabs';




import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css'
const ALLProductSinglePage = () => {
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
		<div>
			<div className='flex flex-col lg:flex-row  gap-8 my-3 lg:my-5'>
				{/* Left Side */}
				<div className='w-full lg:w-[30%] mt-6'>
				<InnerImageZoom src={selectedImg}  className='rounded-md w-full h-auto '   
				 zoomSrc={selectedImg}  // বড় চিত্রের URL
			 // চিত্রের zoom পরিমাণ 2 গুণ
				//  zoomType="hover"  // মাউস hover করলে zoom হবে
				 moveType="pan"  // প্যানিং মোড
				 fadeDuration={200}  // zoom ইন/আউট ট্রানজিশন সময় 200ms
				 fullscreenOnMobile={true}  // মোবাইলে ফুলস্ক্রীন জুম
				 mobileBreakpoint={640}  // মোবাইলের জন্য ব্রেকপয়েন্ট
				 hasSpacer={true}  // স্পেসার ব্যবহার করে cumulative layout shift প্রতিরোধ
				/>
					{/* <img src={selectedImg} alt="Main" className='rounded-md w-full h-[200px]' /> */}

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
					<div className='border border-gray-400 rounded-md flex flex-col lg:flex-row  gap-10 p-4'>
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
							<p className='text-base text-gray-400 font-bold '>$40</p>
							<p className='bg-red-600 text-base rounded-md lg:text-lg font-bold text-white w-fit px-2'>5% OFF</p>
							<p className='text-xl font-bold text-primary mb-3 lg:mb-4'>$35</p>

							{/* Quantity */}
							<div className='mb-4'>
								<p>Quantity</p>
								<QuantityCounter></QuantityCounter>
							</div>

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
							{/* Enter Measurements */}
							<div>
								<p className='text-primary text-base mt-1 lg:mt-2 font-semibold'>Size: <span className='font-bold text-black'>15"X15"</span></p>
								<hr className='text-gray-400 ' />
								<p className='font-bold transition ease-in-out hover:text-blue-600 mt-3 lg:mt-4 cursor-pointer duration-300'>Custom Size</p>
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
													className="border p-1 rounded-md w-20 lg:w-20"
												>
													{Array.from({ length: 129 }, (_, i) => 15 + i).map((num) => (
														<option key={num} value={num}>{num}"</option>
													))}
												</select>

												{/* Fraction dropdown */}
												<select
													value={fraction}
													onChange={(e) => setFraction(Number(e.target.value))}
													className="border p-1 rounded-md w-20 lg:w-20"
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
													className="border p-1 rounded-md w-20 lg:w-20"
												>
													{Array.from({ length: 129 }, (_, i) => 15 + i).map((num) => (
														<option key={num} value={num}>{num}"</option>
													))}
												</select>

												{/* Fraction dropdown */}
												<select
													value={fractionHeight}
													onChange={(e) => setFractionHeight(Number(e.target.value))}
													className="border p-1 rounded-md w-20 lg:w-20"
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
							{/* product description */}
							<div className='mt-3 lg:mt-4'>
								<div className='flex items-center'>
									<p className='w-[130px] lg:w-[160px] text-base font-bold text-[#212529]'>Material</p>
									<p className='font-semibold text-gray-700'>Paper</p>
								</div>
								<div className='flex items-center'>
									<p className='w-[130px] lg:w-[160px] text-base font-bold text-[#212529]'>Colour</p>
									<p className='font-semibold text-gray-700'>Tea</p>
								</div>
								<div className='flex items-center'>
									<p className='w-[130px] lg:w-[160px] text-base font-bold text-[#212529]'>Brand</p>
									<p className='font-semibold text-gray-700'>yoncup</p>
								</div>
								<div className='flex items-center'>
									<p className='w-[130px] lg:w-[160px] text-base font-bold text-[#212529]'>Style</p>
									<p className='font-semibold text-gray-700'>Solid</p>
								</div>
								<div className='flex items-center'>
									<p className='w-[130px] lg:w-[160px] text-base font-bold text-[#212529]'>Item Weight</p>
									<p className='font-semibold text-gray-700'>0.5 Pound</p>
								</div>
								<p className='text-base font-bold text-[#212529]'>About this item</p>
								<p  className='font-semibold text-gray-700 ml-3 lg:ml-5'>Example description of the product.</p>


							</div>
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

					{/* warrenty option */}
					<div className='border border-gray-400 p-4 mt-1 lg:mt-2'>
						{/* Room Name */}
						<div className='mb-3 lg:mb-4'>
							<p className='text-primary text-sm mt-2 md:mt-3'>Room Name</p>
							<hr className='text-gray-400 ' />
							<input type="text" className='border border-gray-400 rounded-md outline-none px-3 py-1 mt-1 md:mt-2 ' />
						</div>

						<WarrentyOtion></WarrentyOtion>
					</div>
				</div>
			</div>
			<ProductTabs></ProductTabs>
		</div>
	);
};

export default ALLProductSinglePage;
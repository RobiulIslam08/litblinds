import React, { useState } from 'react';
import img1 from '../assets/images/windowBlindsSinglePage/82_0.jpg';
import img2 from '../assets/images/windowBlindsSinglePage/82_1.jpg';
import { FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import insideImage from '../assets/images/windowBlindsSinglePage/inside.jpg'
const WindowBlindsSinglePage = () => {
	const [selectedImg, setSelectedImg] = useState(img1);

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
				<div className='border p-4 h-[1900px] md:h-[1200px] border-gray-400 mt-3'>
					{/* select color */}
					<div>
						<button className='text-xs py-2 font-semibold text-left w-full text-white bg-[#2c2c2c] px-5'>Select Color</button>
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
						<p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Mount Type</p>
						<hr  className='text-gray-400 '/>
						{/* inside, outside and text */}
						<div className='flex flex-col lg:flex-row justify-center gap-7 mt-2 lg:mt-3'>
							<div className='flex items-center justify-center gap-2 w-[50%]'>
								{/* inside */}
								<div>
									<img src={insideImage} alt="insideImage"  className='' />
									<p className='text-center text-primary text-sm'>Inside</p>
								</div>
								{/* outside */}
								<div>
									<img src={insideImage} alt="outsitedImage"  srcset="" className='' />
									<p className='text-center text-primary text-sm'>Outside</p>
								</div>
							</div>
							{/* right side text */}
							<p className='w-[50%] text-sm'><span className='font-bold text-xs'>NOTE:</span> Inside mounted blackout shades will have light gaps coming into the room from the edges of the shade. Please order outside mounted blackout shades if you prefer a higher level of blackout.</p>

						</div>
					</div>

				</div>

			</div>
		</div>
	);
};

export default WindowBlindsSinglePage;

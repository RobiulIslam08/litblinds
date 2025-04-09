import React from 'react';
import img1 from '../assets/images/windowBlindsSinglePage/82_0.jpg'
import img2 from '../assets/images/windowBlindsSinglePage/82_1.jpg'
const WindowBlindsSinglePage = () => {
	return (
		<div>
			{/* left side */}
			<div className='w-[30%] mt-6'>
				<img src={img1} alt="" className='rounded-md'/>
				<div className='flex items-center w-[60px] h-[60px] gap-3 mt-5'>
					<img src={img1} alt="" srcset="" className='w-full rounded-md' />
					<img src={img2}  alt="" srcset="" className='w-full rounded-md' />
				</div>
			</div>
			{/* right side */} 
			<div className='w-[70%]'>
				
			</div>
		</div>
	);
};

export default WindowBlindsSinglePage;
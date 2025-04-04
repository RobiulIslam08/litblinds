import React from 'react';

const Discount = () => {
	return (
		<div className='bg-[#1b2f5b] flex flex-col lg:flex-row justify-between items-center text-white pr-8'>
			<div></div>
			<div>
				<p className='text-xs'>
					Save up to <span className='text-base font-semibold'>30% + EXTRA 20%</span>. Ends tonight.</p>
			</div>
			<div className='flex gap-2 font-semibold text-xs lg:text-base'>
				<p>Ending In</p>
				<div className='flex gap-1'>
					<p>00d:</p>
					<p>00h:</p>
					<p>00m:</p>
					<p>00s</p>
				</div>
			</div>
		</div>
	);
};

export default Discount;
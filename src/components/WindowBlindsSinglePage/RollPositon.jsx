import React from 'react';
import reversRoll from '../../assets/images/windowBlindsSinglePage/reverse-roll-12_thumb.jpg'
import standardRoll from '../../assets/images/windowBlindsSinglePage/standard-roll-12_thumb.jpg'
const RollPositon = () => {
	return (
		<div className='mt-3 lg:mt-4'>
				<p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Roll Position</p>
				<hr className='text-gray-400 ' />
				<div className='flex items-center  gap-2'>
					{/* standard roll */}
					<div>
						<img src={standardRoll} alt="" />
						<p className='text-sm text-primary'>Standard Roll</p>
						<p className='text-sm text-primary'>$ 1</p>
					</div>
					{/* reverse roll */}
					<div>
						<img src={reversRoll} alt="" />
						<p className='text-sm text-primary'>Reverse Roll</p>
						<p className='text-sm text-primary'>$ 1</p>
					</div>
				</div>
		</div>
	);
};

export default RollPositon;
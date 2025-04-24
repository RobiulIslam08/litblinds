import React, { useEffect, useState } from 'react';

const Discount = () => {
	const [timeLeft, setTimeLeft] = useState({ days: 10, hours: 0, minutes: 0, seconds: 0 });

	// Helper to pad numbers with leading zero
	const formatTime = (value) => {
		return value < 10 ? `0${value}` : value;
	};

	useEffect(() => {
		const endTime = new Date().getTime() + 10 * 24 * 60 * 60 * 1000; // 10 days from now

		const updateTimer = () => {
			const now = new Date().getTime();
			const distance = endTime - now;

			if (distance < 0) {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				clearInterval(timer);
			} else {
				const days = Math.floor(distance / (1000 * 60 * 60 * 24));
				const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((distance % (1000 * 60)) / 1000);
				setTimeLeft({ days, hours, minutes, seconds });
			}
		};

		const timer = setInterval(updateTimer, 1000);
		updateTimer(); // Initial call
		return () => clearInterval(timer);
	}, []);

	return (
		<div className='bg-[#1b2f5b] flex flex-row items-center text-white px-1 justify-between'>
			<div className='hidden lg:flex'></div>
			<div>
				<p className='text-[10px] md:text-xs'>
					Save up to <span className='text-[10px] lg:text-base font-semibold'>30% + EXTRA 20%</span>. Ends tonight.
				</p>
			</div>
			<div className='flex gap-2 font-semibold text-[10px] lg:text-base'>
				<p>Ending In</p>
				<div className='flex gap-1'>
					<p>{formatTime(timeLeft.days)}d:</p>
					<p>{formatTime(timeLeft.hours)}h:</p>
					<p>{formatTime(timeLeft.minutes)}m:</p>
					<p>{formatTime(timeLeft.seconds)}s</p>
				</div>
			</div>
		</div>
	);
};

export default Discount;

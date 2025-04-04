import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from "../assets/images/slides/slide1.jpg"
import slide2 from "../assets/images/slides/slide2.jpg"
import slide3 from "../assets/images/slides/slide3.jpg"

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
	return (
		<div className='w-full'>
		<Swiper
		  slidesPerView={1}
		  spaceBetween={30}
		  loop={true}
		  pagination={{
			clickable: true,
		  }}
		  navigation={true}
		  modules={[Pagination, Navigation]}
		  className="mySwiper"
		>
		  <SwiperSlide><img src={slide1} alt="" srcset="" /></SwiperSlide>
		  <SwiperSlide><img src={slide2} alt="" srcset="" /></SwiperSlide>
		  <SwiperSlide><img src={slide3} alt="" srcset="" /></SwiperSlide>
		  
		 
		</Swiper>
	  </div>
	);
};

export default Slider;
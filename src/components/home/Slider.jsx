
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider1 from "../../assets/images/slides/slide1.jpg";
import slider2 from "../../assets/images/slides/slide2.jpg";
import slider3 from "../../assets/images/slides/slide3.jpg";


import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Swiper কন্টেইনার */}
      <Swiper
        className=""
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
      >
        {[slider1, slider2, slider3].map((slider, index) => (
          <SwiperSlide key={index}>
            <div className="l">
              <img
                src={slider}
                className=" object-contain block"
                alt={`Slider ${index + 1}`}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* কাস্টম CSS for নেভিগেশন বাটন */}
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            width: 32px; /* বাটনের প্রস্থ */
            height: 32px; /* বাটনের উচ্চতা */
            background-color: #51a2ff; /* ব্যাকগ্রাউন্ড কালার */
            border-radius: 50%; /* বাটনকে গোলাকার করুন */
            color: #000; /* আইকনের কালার */
            font-size: 18px; /* আইকনের সাইজ */
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 18px; /* আইকনের সাইজ ছোট করুন */
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            background-color: #99a3ff; /* হোভার ইফেক্ট */
          }
        `}
      </style>
    </div>
  );
};

export default Slider;
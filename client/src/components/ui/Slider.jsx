import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Mousewheel, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import '../../styles/slider.css';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";


function Slider() {
  return (
    <div className="slider-wrapper">
         <div className="swiper-prev">
          <MdOutlineKeyboardDoubleArrowLeft  className='slider-navigator-prev'/>
        </div>
        <div className="swiper-next">
          <MdOutlineKeyboardDoubleArrowRight  className='slider-navigator-next'/>
        </div>
      <Swiper
        cssMode={true}
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        speed={3000}
        autoplay={{
          delay: 3000,
        }}
        mousewheel={true}
        pagination={{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        navigation={{
          enabled:true,
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next',
        }}
        modules={[Keyboard, Pagination, Mousewheel, Navigation,Autoplay]}
        className="mySwiper"
      >        
        <SwiperSlide className='slides' style={{backgroundImage : `url(https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}></SwiperSlide>
        <SwiperSlide className='slides' style={{backgroundImage : `url(https://images.unsplash.com/photo-1459173422306-0ce3fb37f832?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}></SwiperSlide>
        <SwiperSlide className='slides' style={{backgroundImage : `url(https://images.unsplash.com/photo-1518527399940-f3f768f47dd2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}></SwiperSlide>
        <SwiperSlide className='slides' style={{backgroundImage : `url(https://images.pexels.com/photos/9546375/pexels-photo-9546375.jpeg?auto=compress&cs=tinysrgb&w=3072&h=4608&dpr=1)`}}></SwiperSlide>
        <SwiperSlide className='slides' style={{backgroundImage : `url(https://images.pexels.com/photos/10923070/pexels-photo-10923070.jpeg?auto=compress&cs=tinysrgb&w=2000&h=3000&dpr=1)`}}></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
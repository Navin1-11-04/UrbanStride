import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/banner.css'
import banner_1 from '../../assets/advertisement_1.jpg'
import banner_2 from '../../assets/advertisement_2.jpg'

function Banner() {
  return (
    <div className="banner-wrapper">
 <Swiper
        direction={'vertical'}
        cssMode={true}
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        speed={5000}
        autoplay={{
          delay: 5000,
        }}
        mousewheel={true}
        pagination={{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        modules={[Keyboard, Pagination, Mousewheel,Autoplay]}
        className="myBanner"
      >
        <SwiperSlide>
            <img src={banner_1} alt="" className='banner-img'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner_2} alt="" className='banner-img'/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Banner
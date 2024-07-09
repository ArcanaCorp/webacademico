import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './herobanner.css'

function HeroBanner() {

    return (
    
        <div className='__hero_banner'>

            <Swiper className='__banner' loop={true} spaceBetween={30} centeredSlides={true} autoplay={{delay: 3000, disableOnInteraction: false}} modules={[Autoplay]}>
                <SwiperSlide className='__slide'></SwiperSlide>
                <SwiperSlide className='__slide'></SwiperSlide>
                <SwiperSlide className='__slide'></SwiperSlide>
                <SwiperSlide className='__slide'></SwiperSlide>
                <SwiperSlide className='__slide'></SwiperSlide>
                <SwiperSlide className='__slide'></SwiperSlide>
                <SwiperSlide className='__slide'></SwiperSlide>
                <SwiperSlide className='__slide'></SwiperSlide>
                <SwiperSlide className='__slide'></SwiperSlide>
            </Swiper>

        </div>
    
    )

}

export default HeroBanner
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import photo from '../../assets/uzum.png'
import photo2 from '../../assets/Link.png'
import photo3 from '../../assets/div.inline-wrapper.png'
import '../hero/Hero.css'

const Hero = () => {
  return (
    <div className='container mx-auto mb-15'>
      <Swiper  navigation={true} modules={[Navigation]} className="mySwiper relative color-gray-300">
        <SwiperSlide><img className='w-full h-auto' src={photo} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-auto' src={photo2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-auto' src={photo3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
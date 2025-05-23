import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Swiper2() {
    return (
        <>
            <Swiper
                spaceBetween={20}
                effect={'fade'}
                navigation={false}
                pagination={{
                    clickable: false,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                
                <SwiperSlide>
                        <div className='scale-125 my-10 flex justify-center'>
                            <img src="Images/Page3/1.png" alt="1" />
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className='scale-125 my-10 flex justify-center'>
                            <img src="Images/Page3/2.png" alt="2" />
                        </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}

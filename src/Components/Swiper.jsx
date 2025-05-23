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

export default function Slider() {
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
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-full w-full m-0 p-0 relative'>
                        <img src="Images/Page1/bags001.jpg" />
                        <div className='flex py-16 w-[40%] flex-col gap-12 absolute top-0 left-0'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-6xl font-medium text-gray-700'>New</h1>
                                <h1 className='text-6xl font-medium text-gray-700'>collection</h1>
                            </div>
                            <p className='text-gray-600'>The highest quality products, sewn in Ireland from <br></br> Irish materials. Quality and durability for years.</p>
                            <button className='bg-[#00bc58] w-44 h-12 text-white text-md hover:bg-green-800 duration-500'>
                                New Collection
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[70dvh] w-full m-0 p-0 relative'>
                        <img src="Images/Page1/bags002.jpg" />
                        <div className='flex py-16 w-[40%] flex-col gap-12 absolute top-0 left-0'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-6xl font-medium text-gray-700'>New</h1>
                                <h1 className='text-6xl font-medium text-gray-700'>collection</h1>
                            </div>
                            <p className='text-gray-600'>The highest quality products, sewn in Ireland from <br></br> Irish materials. Quality and durability for years.</p>
                            <button className='bg-[#00bc58]  w-44 h-12 text-white text-md hover:bg-green-800 duration-500'>
                                New Collection
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

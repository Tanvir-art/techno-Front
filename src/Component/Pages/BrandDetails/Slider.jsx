import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Slider = () => {
  return (
    <div>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='bg-[#333] h-[300px]  w-full flex justify-center items-center'>
            <div>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>Shop Now for Unbeatable Deals!</h2>
              <div className='flex justify-center iteams-center'>
              <button className='bg-[#fff] px-4 py-3 my-6 rounded font-bold text-sm md:text-base'>SHop  Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[#333] h-[300px]  w-full flex justify-center items-center'>
            <div>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>Discover Your Perfect Style with Our New Arrivals</h2>
              <div className='flex justify-center iteams-center'>
              <button className='bg-[#fff] px-4 py-3 my-6 rounded font-bold text-sm md:text-base'>SHop  Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[#333] h-[300px]  w-full flex justify-center items-center'>
        <div>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>Limited-Time Offer: Save Big on Your Favorite Brands!</h2>
              <div className='flex justify-center iteams-center'>
              <button className='bg-[#fff] px-4 py-3 my-6 rounded font-bold text-sm md:text-base'>SHop  Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider

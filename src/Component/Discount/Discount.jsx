import React from 'react'
import './Discount.css'
const Discount = () => {
  return (
    <div className='flex flex-col md:flex-row gap-6'>
      <div className='discountImg text-white flex-1 flex flex-col justify-center iteams-center pl-6'>
        <h2>Get 50% Off</h2>
        <h2 className='text-3xl font-bold py-4'>SMART TELEVISION WITH PEN</h2>
        <div>
        <button className='bg-[#e73c17] px-6 py-3'>SHOP NOW</button>
        </div>
      </div>

      <div className='discountImgOne text-white flex-1 flex flex-col justify-center iteams-center pl-6'>
        <h2>Get 50% Off</h2>
        <h2 className='text-3xl font-bold py-4'>SMART TELEVISION WITH PEN</h2>
        <div>
        <button className='bg-[#e73c17] px-6 py-3 font-bold'>SHOP NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Discount

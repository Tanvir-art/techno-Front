import React from 'react'

const Feature = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 bg-[#f0f2f5] h-max my-10'>
      <div className='flex items-center justify-center gap-4 border-e-2 border-slate-300 px-4 py-6'>
        <div className='flex items-center justify-center'>
           <img src="images/1.webp" alt="" />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold'>SUPPORT 24/7</h2>
            <p>Delicated 24/7 Support</p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 border-e-2 border-slate-300 px-4 py-6'>
        <div className='flex items-center justify-center'>
           <img src="images/2.webp" alt="" />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold'>EASY RETURNS</h2>
            <p>Shop With Confidence</p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 border-e-2 border-slate-300 px-4 py-6'>
        <div className='flex items-center justify-center'>
           <img src="images/3.webp" alt="" />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold'>CARD PAYMENT</h2>
            <p>12 Months Installments</p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 px-4 py-6'>
        <div className='flex items-center justify-center'>
           <img src="images/4.webp" alt="" />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold'>FREE SHIPPING</h2>
            <p>Capped at $50 per order</p>
        </div>
      </div>


    </div>
  )
}

export default Feature

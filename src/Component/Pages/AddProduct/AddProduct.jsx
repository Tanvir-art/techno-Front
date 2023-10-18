import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <h2>add Product</h2>

      <div  className='bg-stone-200  shadow-xl py-10 mx-10'>
        <form className='mx-10 md:mx-14 lg:mx-20' >
            <div>
                <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' type="text" name="image" id="" placeholder='Give the product url'/>
            </div>

            <div>
            <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' type="text" name="nam" id="" placeholder='Give the product name'/>
            </div>

            <div>
            <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' type="text" name="brand" id="" placeholder='give the brand name'/>
            </div>

            <div>
            <select className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' name="type" id="">
                <option>Type</option>
                <option>Mobile</option>
                <option>Electronics</option>
                <option>Computer</option>
                <option>Headphone</option>
                <option>Tv</option>
            </select>
            </div>

            <div>
            <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' type="text" name="price" id=""  placeholder='Give the product price'/>
            </div>

            <div>
                <textarea className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' name="" id="" cols="10" rows="5" placeholder='Type a short description'></textarea>
            </div>

            <div>
                <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' type="text" name='rating' placeholder='Give the product rating'/>
            </div>
            <div className='flex justify-center iteams-center'>
                <button className='bg-[#333] px-6 py-3 text-white font-size'>Add Product</button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default AddProduct

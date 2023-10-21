import { data } from 'autoprefixer';
import React from 'react'

const AddProduct = () => {
  const  handleSubmit= (event)=>{
    event.preventDefault();
    const form = event.target;
    const  image = form.image.value;
    const  nam = form.nam.value;
    const  brand = form.brand.value;
    const  message = form.message.value;
    const  type = form.type.value;
    const  price = form.price.value;
    const  rating = form.rating.value;

    const  newCoffee = {image, nam, brand, message, type,price, rating}
    console.log(newCoffee)
 form.reset();

    //send data to server

    fetch('https://back-ay75mw78l-tanvir-haans-projects.vercel.app/add-product',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
    })
  }
  return (
    <div>
      <h2 className='text-3xl text-center font-bold py-6'>Add Product</h2>

      <div  className='bg-stone-200  shadow-xl py-10 mx-10'>
        <form onSubmit={handleSubmit} className='mx-10 md:mx-32 lg:mx-64' >
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
            <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' type='text' name="price" id=""  placeholder='Give the product price'/>
            </div>

            <div>
                <textarea className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' name="message" id="" cols="10" rows="5" placeholder='Type a short description'></textarea>
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

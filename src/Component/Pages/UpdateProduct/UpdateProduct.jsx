import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UpdateProduct = () => {
  const singleData = useLoaderData();
  const {_id, image, nam, brand, type, price, rating} = singleData;

    const  handleUpdate= (event)=>{
      event.preventDefault();
      const form = event.target;
      const  image = form.image.value;
      const  nam = form.nam.value;
      const  brand = form.brand.value;
      const  type = form.type.value;
      const  price = form.price.value;
      const  rating = form.rating.value;
  
      const  updatedCoffee = {image, nam, brand, type,price, rating}
      console.log(updatedCoffee)
   form.reset();
  
      //send data to server
  
      fetch(`https://back-ay75mw78l-tanvir-haans-projects.vercel.app/update/${_id}`,{
        method: 'PUT',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(updatedCoffee)
      })
      .then(res=> res.json())
      .then(data=>{
        console.log(data);
      })
    }
  return (
    <div>
     
      <h2 className='text-3xl text-center font-bold py-6'>Update Product : {nam}</h2>

<div  className='bg-stone-200  shadow-xl py-10 mx-10'>
  <form onSubmit={handleUpdate} className='mx-10 md:mx-32 lg:mx-64' >
      <div>
          <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' type="text" name="image" defaultValue={image} id="" placeholder='Give the product url'/>
      </div>

      <div>
      <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' type="text" name="nam" defaultValue={nam} id="" placeholder='Give the product name'/>
      </div>

      <div>
      <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' type="text" name="brand" defaultValue={brand} id="" placeholder='give the brand name'/>
      </div>

      <div>
      <select className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' name="type" defaultValue={type} id="">
          <option>Type</option>
          <option>Mobile</option>
          <option>Electronics</option>
          <option>Computer</option>
          <option>Headphone</option>
          <option>Tv</option>
      </select>
      </div>

      <div>
      <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' type='text' name="price" defaultValue={price} id=""  placeholder='Give the product price'/>
      </div>

      <div>
          <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6' type="text" name='rating' defaultValue={rating} placeholder='Give the product rating'/>
      </div>
      <div className='flex justify-center iteams-center'>
          <button className='bg-[#333] px-6 py-3 text-white font-size'>Update Product</button>
      </div>

  </form>
</div>
    </div>
  )
}

export default UpdateProduct

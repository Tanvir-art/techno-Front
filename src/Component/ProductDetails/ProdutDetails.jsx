import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProdutDetails = () => {
  const productSingle = useLoaderData();
  const {_id, image, nam, brand, price, rating, message} = productSingle;
  console.log(productSingle)

  const submitCartData =()=>{
    fetch('http://localhost:5000/cart',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(productSingle)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        toast('Data added to Cart Succesfully');
      }
      console.log(data);
    })
  }
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{brand}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{nam}</h1>
        <div className="flex mb-4">
        <p>Rating : {rating}</p>
   
        </div>
        <p className="leading-relaxed">{message}</p>
        <p className='text-2xl font-bold py-6'>Price: {price}$</p>
        <button onClick={submitCartData} className='btn btn-primary'>Add To Cart</button>
      </div>
      <ToastContainer/>
    </div>
  </div>
</section>
    </div>
  )
}

export default ProdutDetails

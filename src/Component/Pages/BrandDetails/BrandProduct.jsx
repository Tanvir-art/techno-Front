import React from 'react'
import { Link } from 'react-router-dom';

const BrandProduct = ({product}) => {
    const {_id, image, nam, brand, type, price, rating} = product;
    // const handleUpdate =(id)=>{
    //   console.log(id)
    // }
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className="rounded-xl h-[300px] object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{nam}</h2>
    <div className='flex gap-6'>
    <p className='font-bold'>Brand: {brand}</p>
    <p className='font-bold'>Type: {type}</p>   
    
  </div>
  <div className='flex gap-6'>
    <p>price: {price}</p>
    <p>rating: {rating} /5</p>

  </div>
    <div className="card-actions">
      <Link to={`/productDetails/${_id}`}>
      <button className="btn btn-primary">Details</button>
      
      </Link>
      <Link to={`/brand/update/${_id}`}>
      <button  className="btn btn-primary">Update</button>
      </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default BrandProduct

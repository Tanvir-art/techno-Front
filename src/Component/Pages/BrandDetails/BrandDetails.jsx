import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import BrandProduct from './BrandProduct';
import Slider from './Slider';

const BrandDetails = () => {
    const {brandName} = useParams();
    const productts = useLoaderData();
    const filterProduct = productts.filter(productFilter=> productFilter.brand === brandName)
    
  return (
    <div>
        <Slider/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10'>
      {
        filterProduct.map(product=><BrandProduct key={product._id} product={product}/>)
      }
      </div>
    </div>
  )
}

export default BrandDetails

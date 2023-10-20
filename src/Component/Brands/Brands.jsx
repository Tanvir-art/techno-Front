import React, { useEffect, useState } from 'react'
import Brand from './Brand';

const Brands = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('/data/data.json')
        .then(res=> res.json())
        .then(data=> setData(data.products))
    }, [])
  return (
    <div>
      <h2>Brands {data.length}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-10 md:mx-20 my-10'>
      {
        data.map(brand=><Brand key={brand.id} brand={brand}/>)
      } 
      </div>
    </div>
  )
}

export default Brands

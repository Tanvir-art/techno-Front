import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Getcart = () => {
  const cartData = useLoaderData();
  console.log(cartData)
  const [cart, setCart] = useState(cartData);
  const handleDelete= (id)=>{
    console.log(id)
    fetch(`https://back-ay75mw78l-tanvir-haans-projects.vercel.app/cart-product/${id}`, {
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=> {
      if(data.deletedCount > 0){
        toast('Deleted Successfully');

        const remaining = cart.filter(dataCart=> dataCart._id !== id)
        setCart(remaining);
      }
    })
  }
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
       
        <th>Name</th> 
        <th>Brand</th> 
        <th>Message</th> 
        <th>Type</th> 
        <th>Price</th> 
        <th>Rating</th>
        <th>Button </th>
      </tr>
    </thead> 
    <tbody>

    {
      cart.map(cart=>{
        return (
        <tr key={cart._id}>
        <th>{cart.nam}</th> 
        <td>{cart.brand}</td> 
        <td>{`${cart.message.slice(0,70)}...`}</td> 
        <td>{cart.type}</td> 
        <td>{cart.price}</td> 
        <td>{cart.rating}</td> 
        <td><button onClick={()=>handleDelete(cart._id)} className='btn btn-primary'>Delete</button></td>
      </tr>
        )
      })
    }
 
    </tbody> 

  </table>
  <ToastContainer/>
</div>
    </div>
  )
}

export default Getcart

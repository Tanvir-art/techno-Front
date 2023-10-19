import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../../Provider/Auhtprovider'

const Signup = () => {
  const {createUser} = useContext(authContext)
  const handleSignup = (e)=>{
    e.preventDefault();
    const form = e.target; 
    const name = form.nam.value;
    const email = form.email.value;
    const pass = form.pass.value;
    createUser(email, pass)
    .then(result =>{
      console.log(result.user)

      //user declered 
      const user = {email}

      fetch('http://localhost:5000/user',{
        method: 'POST',
        headers:{
          'content-type': 'application/json' 
        },
        body: JSON.stringify(user)
      })
      .then(res=> res.json())
      .then(data=>console.log(data))
    })
    .catch(error=>{
      console.error(error);
    })
  }
  return (
    <div>
      
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignup} className="card-body w-[400px]">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name"  name='nam' className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='pass' className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>

        <p>Already Signup? <Link to='/login'>Login</Link></p>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Signup

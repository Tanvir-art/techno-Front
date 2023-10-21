import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { authContext } from '../../../Provider/Auhtprovider'

const Signup = () => {
  const [register, setRegister] = useState('');
  const [success, setSuccesss] = useState('');
  const {createUser} = useContext(authContext)
  const handleSignup = (e)=>{
    e.preventDefault();
    const form = e.target; 
    const name = form.nam.value;
    const email = form.email.value;
    const pass = form.pass.value;

    setRegister('')
    setSuccesss('')

    if(pass.length < 6){
      toast('Password should be at last 6 character');
      return;
    }else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[\w!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(pass)){
      toast("In password give at least one capital letter & One special keyword");
      return;
    }


    createUser(email, pass)
    .then(result =>{
      console.log(result.user)

      //user declered 
      const user = {email}

      fetch('https://back-ay75mw78l-tanvir-haans-projects.vercel.app/user',{
        method: 'POST',
        headers:{
          'content-type': 'application/json' 
        },
        body: JSON.stringify(user)
      })
      .then(res=> res.json())
      .then(data=>console.log(data))
      toast('User Created Successfully')
    })
    .catch(error=>{
      console.error(error);
      setRegister(error.message)
      toast("email already use");
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
      <ToastContainer />
    </div>
  </div>
</div>

    </div>
  )
}

export default Signup

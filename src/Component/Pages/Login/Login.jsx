import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../../Provider/Auhtprovider'

const Login = () => {
  const {signIn} = useContext(authContext);
  const handleLogin =(e)=>{
    e.preventDefault();
    const form = e.target; 
    const email = form.email.value;
    const pass = form.pass.value;
    console.log(email, pass)
    signIn(email, pass)
    .then(result=>{
      console.log(result.user)
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
      <form onSubmit={handleLogin} className="card-body w-[400px]">
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
          <button className="btn btn-primary">Login</button>
        </div>

        <p>Already Login? <Link to='/signup'> Sign up</Link></p>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login

import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/forgot-password', { email });
      setMessage(response.data.message);
      // Handle success
    } catch (error) {
      setMessage(error.response.data.error);
      // Handle error
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Forgot your password? No problem!</h1>
          <p className="py-6">
            Enter the email address associated with your account, and we will send you a link to 
            reset your password. If you don't see an email from us, please check your spam folder or contact
            support for assistance.
          </p>
        </div>
        <div className="card w-full max-w-lg shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className='mb-5 text-center text-4xl' htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="email"
                id="email"
                value={email}
                className="input input-bordered"                
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Reset Password</button>
            </div>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
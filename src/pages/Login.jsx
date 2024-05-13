import '../style/login.css'
import React from 'react'


const Login = () => {
    
  return (
    <div className="login">
    <div className='login-page'>
      <div className='login-box'>
        <div className='header'>Amrita Smart Waste Management</div>
        <form onSubmit=''>
          <div className='description'>Welcome Back!</div>
          <div className="login-field">
            <div className="login-element">
              <label className='input-labels'>User ID</label>
              <input
                className='input-boxes'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                name='user_id'
                placeholder='abcd@efgh.com'
                required
              />
              
            <label className='input-labels'>Password</label>
            <input
              className='input-boxes'
              type='password'

              name='password'
              placeholder=''
              required
            />

            <label className='input-labels'>Role</label>
            <select className='input-boxes' name='role' required>
              <option value='' style={{color: 'black'}}>Select Role</option>
              <option value='admin' style={{color: 'black'}}>Employee</option>
              <option value='user' style={{color: 'black'}}>User</option>
            </select>
            </div>
            
            
            <input className='submit-button' type='submit' value='Submit' />

          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

  
  export default Login;
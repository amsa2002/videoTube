import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './CSS/LogInSignUp.css'

function LogInSignUp() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mockLogin = () => {
    // Simulate a successful login
    localStorage.setItem('auth-token', 'mockToken');
    window.location.replace('/');
  };

  const mockSignup = () => {
    // Simulate a successful signup
    localStorage.setItem('auth-token', 'mockToken');
    window.location.replace('/');
  };

  return (
    <div className='loginsignup'>
      
      <div className="loginsignup-container">
      <div className='nav-logo'>
        <Link to='/'><img src={logo} alt='logo' /></Link>
      </div>
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your name" required /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' required />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' required />
        </div>
        <button onClick={() => { state === "Login" ? mockLogin() : mockSignup() }}>Continue</button>
        {state === "Login" ?
          <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span></p>
          : <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LogInSignUp;

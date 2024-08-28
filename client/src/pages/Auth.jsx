import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import '../styles/auth.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast,Bounce } from 'react-toastify';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleAuthMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const handleAuthSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.post('http://localhost:3000/user/login', {
          email: userDetails.email,
          password: userDetails.password,
        });
        const token = response.data;

        if (token) {
          localStorage.setItem('user', token);
          localStorage.setItem('email',userDetails.email);

          dispatch(setUser({ email: userDetails.email }))
            toast.success('Login successful!', {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
            navigate('/');
        }
      } else {
        const response = await axios.post('http://localhost:3000/user', userDetails);
        if (response.status === 200) {
          toast.success('Account created successfully! Please sign in.');
          navigate('/signin');
        } else if (response.status === 409) {
          toast.error('Email already exists. Please try again.', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        } else {
          toast.error('Failed to create account. Please try again.', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }
      }
    } catch (error) {
      toast.error('Authentication failed. Please check your details and try again.', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      console.error("Authentication error:", error);
    }

    setUserDetails({
      username: '',
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2 className="auth-header">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
        <form className="auth-form" onSubmit={handleAuthSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Name"
              required
              value={userDetails.username}
              onChange={handleChange}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={userDetails.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={userDetails.password}
            onChange={handleChange}
          />
          <button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</button>
        </form>
        <div className="auth-google-button">
          <FcGoogle size={24} />
          <span>{isLogin ? 'Sign in with Google' : 'Sign up with Google'}</span>
        </div>
        <div className="auth-toggle" onClick={toggleAuthMode}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
        </div>
      </div>
    </div>
  );
}

export default Auth;
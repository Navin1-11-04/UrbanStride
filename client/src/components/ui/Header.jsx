import React from 'react';
import '../../styles/header.css';
import { IoBagOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchChange } from '../../redux/searchSlice';

function Header() {
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(searchChange(!search));
  }

  const cart = useSelector((state) => state.cartList.cart);
  const user = useSelector((state) => state.user.user);

  return (
    <div className="header-wrapper">
      <div className="header-container__top">
        <div className="top-nav__group">
          <h1 className='logo'>UrbanStride</h1>
        </div>
        <div className="top-nav__group">
          <div className="search icons">
            <span className='nav-icon' onClick={handleSearch}><RiSearch2Line /></span>
          </div>
          <div className="favourite icons">
            <Link to="/favourites" className='nav-icon'><FiHeart /></Link>
          </div>
          <div className="cart icons">
            <Link to="/cart" className='nav-icon'>
              <IoBagOutline />
              <span id='count'>{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="header-container__btm">
        <div className="nav-group__links">
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/products" className='nav-link'>Products</Link>
          <Link to="/order" className='nav-link'>Orders</Link>
          <Link to="/help" className='nav-link'>Help</Link>
        </div>
        <div className="user-container">
          <Link to="/authentication" className='user'>
            <FaRegUser className='user-icon' />
            <p className='user-name'>
              {user ? user : 'Guest'} 
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

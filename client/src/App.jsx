import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';
import Search from './components/Search.jsx';
import Loader from './components/Loader.jsx';
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';
import Favourites from './pages/Favourites.jsx';
import Help from './pages/Help.jsx';
import CreateOrder from './pages/CreateOrder.jsx';
import DetailedModal from './pages/DetailedModal.jsx';
import Order from './pages/Order.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/ui/Header.jsx';

function App() {
  return ( 
    <Router>
      <Loader/>
      <ToastContainer/>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthPage = location.pathname === '/authentication';

  useEffect(() => {
    const firstLoad = !localStorage.getItem('initialLoadComplete');
    if (firstLoad) {
      localStorage.setItem('initialLoadComplete', 'true');
      if (location.pathname === '/') {
        navigate('/authentication');
      }
    }
  }, [location.pathname, navigate]);

  return (
    <>
      {!isAuthPage && <Header />}
      {!isAuthPage && <Search />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/authentication" element={<Auth />} />
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/products/:productId" element={<DetailedModal/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/placeorder" element={<CreateOrder/>}/>
      </Routes>
    </>
  );
}

export default App;

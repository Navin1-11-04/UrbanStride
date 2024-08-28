import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Filters from '../components/Filter';
import ToolBar from '../components/ToolBar';
import DetailedModal from './DetailedModal';
import { toast, Bounce } from 'react-toastify';
import { setFavorites, toggleFavourite } from '../redux/favouriteSlice';
import { setCart, addToCart } from '../redux/cartSlice';
import axios from 'axios';
import '../styles/products.css';
import { setProducts } from '../redux/searchSlice';

function Products() {
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.search.searchQuery);
  const filterState = useSelector((state) => state.filter.filter);
  const token = localStorage.getItem('user');
  const favourites = useSelector((state) => state.favourite.favourite);
  const cartItems = useSelector((state) => state.cartList.cart);

  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    size: [],
    color: [],
    material: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
    fetchCartItems();
    fetchFavorites();
  }, []);

  const getProducts = async () => {
    try {
      const res = await fetch('https://urban-stride-server.vercel.app/products', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error('Failed to fetch products');

      const data = await res.json();
      dispatch(setProducts(data));
    } catch (error) {
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchCartItems = async () => {
    try {
      const res = await fetch('https://urban-stride-server.vercel.app/cart', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error('Failed to fetch cart items');

      const data = await res.json();
      dispatch(setCart(data.cartItems));
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const res = await axios.get('https://urban-stride-server.vercel.app/favourites', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 200) {
        dispatch(setFavorites(res.data.favorites));
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const handleAddToCart = async (item) => {
    try {
      const res = await fetch('https://urban-stride-server.vercel.app/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_id: item.id, quantity: 1 }),
      });

      if (!res.ok) throw new Error('Failed to add product to cart');

      const data = await res.json();
      dispatch(addToCart(item));
      toast.success('Item added to cart!', {
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
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const handleToggleFavourite = async (item) => {
    try {
      const url = `https://urban-stride-server.vercel.app/favourites`;
      const isFavourite = favourites.some(fav => fav.id === item.id);
      const method = isFavourite ? 'DELETE' : 'POST';
      
      const res = await axios({
        method,
        url,
        data: { id: item.id, name: item.name, price: item.price, image: item.images[0] },
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if ((method === 'DELETE' && res.status === 200) || (method === 'POST' && res.status === 201)) {
        dispatch(toggleFavourite({ ...item, id: item.id }));
  
        // Show toast notification
        toast.success(isFavourite ? 'Removed from favourites' : 'Added to favourites', {
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
    } catch (error) {
      console.error('Error toggling favourite:', error);
      toast.error('Failed to update favorite. Please try again.', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const handleModalOpen = (product) => {
    setIsModalOpen(true);
    setSelectedProduct(product);
  };
const handleFilterChange = (type, value) => {
    setSelectedFilters((prevFilters) => {
      const currentFilters = prevFilters[type];
      const isSelected = currentFilters.includes(value);
      return {
        ...prevFilters,
        [type]: isSelected
          ? currentFilters.filter((filter) => filter !== value)
          : [...currentFilters, value],
      };
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const filteredProducts = shoes.filter((product) => {
    const { category, brand, size, color, material } = selectedFilters;
    return (
      (category.length === 0 || category.includes(product.category)) &&
      (brand.length === 0 || brand.includes(product.brand)) &&
      (size.length === 0 || size.some(s => product.sizes.includes(Number(s)))) &&
      (color.length === 0 || color.some(c => product.colors.includes(c.toLowerCase()))) &&
      (material.length === 0 || material.includes(product.material))
    );
  });

  return (
    <>
      <ToolBar />
      <Filters onFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
      <div className={`products-wrapper ${filterState ? '' : 'hide'}`}>
        {loading ? (
          <p className='loader-products'>Loading products...</p>
        ) : error ? (
          <p className='error-txt loader-products'>{error}</p>
        ) : (
          <div className="products-container">
            {filteredProducts.length === 0 ? (
              <h2 className='not-found-txt'>No products Found...</h2>
            ) : (
              filteredProducts.map((item, index) => (
                <Product
                  key={index}
                  item={item}
                  isInCart={cartItems.some(cartItem => cartItem.product_id === item.id)}
                  isFavourite={favourites.some(fav => fav.id === item.id)}
                  onAddToCart={handleAddToCart}
                  onToggleFavourite={handleToggleFavourite}
                  onModalOpen={handleModalOpen}
                />
              ))
            )}
          </div>
        )}
      </div>
      {isModalOpen && (
        <DetailedModal product={selectedProduct} onClose={handleModalClose} />
      )}
    </>
  );
}

export default Products;

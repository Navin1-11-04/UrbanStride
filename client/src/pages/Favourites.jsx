import React, { useEffect, useState } from 'react';
import '../styles/favourite.css';
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";
import { PiHeartBreakFill } from "react-icons/pi";

function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  const reduxFavourites = useSelector((state) => state.favourite.favourite);

  useEffect(() => {
    if (reduxFavourites.length > 0) {
      setFavourites(reduxFavourites);
      setLoading(false);  // Stop loading once data is set
    } else {
      setLoading(true);   // Continue loading if no data
    }
  }, [reduxFavourites]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="favourite-wrapper">
      <div className="favourite-header">
        <h2 className='favourites-title'>Favourites</h2>
      </div>
      <div className="favourite-list-container">
        {favourites.length === 0 ? (
          <div className="no_favourites-container center">
            <PiHeartBreakFill className='no_favourite-img'/>
            <p className='no_favourite-txt'>
              It looks like you haven't added any favorites yet. Start exploring and pick your top choices!
            </p>
          </div>
        ) : (
          favourites.map((item, index) => (
            <div key={index} className="favourite-item">
              <div className='heart-shape'>
                <FaHeart />
              </div>
              <div className="favourite-img-container">
                <img src={item.image} alt={item.name} className='favourite-img' />
              </div>
              <div className='favourite-info'>
                <p>{item.name}</p>
                <p>MRP : {item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favourites;

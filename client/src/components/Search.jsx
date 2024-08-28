import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import '../styles/search.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchChange, searchProduct} from '../redux/searchSlice';


function Search() {
    const searchState = useSelector((state) => state.search.search);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const toggleSearchView = () => {
        dispatch(searchChange(!searchState));
            setSearch(""); 
            dispatch(searchProduct(""));
    };
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        dispatch(searchProduct(search));
    };
  return (
    <div className={`search-wrapper ${searchState ? '' : 'show'}`}>
        <div className="search-container">
                <div className='search-sub-container'>
                    <span className='search-icon-container' onClick={handleSearch}>
                        <FiSearch className='search-icon' />
                    </span>
                    <input 
                        type="text" 
                        placeholder='Search...' 
                        className='search-bar' 
                        value={search} 
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setSearch(e.target.value)} 
                    />
                </div>
            </div>
            <span className="search-cancel-container">
                <span className='icon-span'  onClick={toggleSearchView}>
                    <IoCloseOutline  className="search-cancel-icon" />
                </span>
            </span>
    </div>
  )
}

export default Search;

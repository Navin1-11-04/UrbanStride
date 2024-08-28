import React from 'react';
import '../styles/toolbar.css';
import { BsSliders } from "react-icons/bs";
// import { FaSort } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../redux/filterSlice';


function ToolBar() {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter.filter);

  const toggleFilterView = () => {
    dispatch(filterChange(!filterState));
  };

  return (
    <div className="toolbar-wrapper">
      <div className="toolbar-container">
        <div className="toolbar-group">
          <h1 className='tool-bar-title'>Products</h1>
        </div>
        <div className="toolbar-group">
          <span className='filter-btn' onClick={toggleFilterView}>
            <p className='toolbar-subtitle'>{filterState ? 'Hide Filters' : 'Show Filters'}</p>
            <BsSliders className='tool-icon'/>
          </span>
          {/* <span className='sort-btn'>
            <p className='toolbar-subtitle'>Sort By</p><FaSort className='tool-icon'/>
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default ToolBar;

import React from 'react';
import '../styles/filter.css';
import { useSelector } from 'react-redux';

function Filters({ onFilterChange, selectedFilters }) {
  const filterState = useSelector((state) => state.filter.filter);

  const handleCheckboxChange = (type, value) => {
    onFilterChange(type, value);
  };

  return (
    <div className={`filter-wrapper ${filterState ? '' : 'hide'}`}>
      <h2 className="filter-title">Filters</h2>
      <div className="filter-container">
        <h3 className="filter-subtitle">Category</h3>
        <div className="filter-group">
          {['Men', 'Women', 'Kids'].map((category) => (
            <span className="filter" key={category}>
              <input
                type="checkbox"
                id={category.toLowerCase()}
                name="category"
                value={category}
                checked={selectedFilters.category.includes(category)}
                onChange={() => handleCheckboxChange('category', category)}
              />
              <label htmlFor={category.toLowerCase()}>{category}</label>
            </span>
          ))}
        </div>

        <h3 className="filter-subtitle">Brand</h3>
        <div className="filter-group">
          {['Nike'].map((brand) => (
            <span className="filter" key={brand}>
              <input
                type="checkbox"
                id={brand.toLowerCase()}
                name="brand"
                value={brand}
                checked={selectedFilters.brand.includes(brand)}
                onChange={() => handleCheckboxChange('brand', brand)}
              />
              <label htmlFor={brand.toLowerCase()}>{brand}</label>
            </span>
          ))}
        </div>

        <h3 className="filter-subtitle">Sizes</h3>
        <div className="filter-group">
          {['6.5', '7', '8', '9', '10'].map((size) => (
            <span className="filter" key={size}>
              <input
                type="checkbox"
                id={`size${size}`}
                name="size"
                value={size}
                checked={selectedFilters.size.includes(size)}
                onChange={() => handleCheckboxChange('size', size)}
              />
              <label htmlFor={`size${size}`}>{size}</label>
            </span>
          ))}
        </div>

        <h3 className="filter-subtitle">Colors</h3>
        <div className="filter-group">
          {['Black', 'White', 'Blue', 'Green', 'Red', 'Pink', 'Grey', 'Orange'].map((color) => (
            <span className="filter" key={color}>
              <input
                type="checkbox"
                id={color.toLowerCase()}
                name="color"
                value={color}
                checked={selectedFilters.color.includes(color)}
                onChange={() => handleCheckboxChange('color', color)}
              />
              <label htmlFor={color.toLowerCase()}>{color}</label>
            </span>
          ))}
        </div>

        <h3 className="filter-subtitle">Material</h3>
        <div className="filter-group">
          {['Synthetic', 'Leather', 'Mesh', 'Flyknit', 'Sustainable Materials'].map((material) => (
            <span className="filter" key={material}>
              <input
                type="checkbox"
                id={material.toLowerCase().replace(/\s+/g, '')}
                name="material"
                value={material}
                checked={selectedFilters.material.includes(material)}
                onChange={() => handleCheckboxChange('material', material)}
              />
              <label htmlFor={material.toLowerCase().replace(/\s+/g, '')}>{material}</label>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;

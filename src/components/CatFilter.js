import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/catFilter.css';

const categories = ['Ordinary Drink', 'Cocktail', 'Milk / Float / Shake', 'Other/Unknown', 'Cocoa', 'Shot', 'Coffee / Tea', 'Homemade Liqueur', 'Punch / Party Drink', 'Soft Drink / Soda'];

const CatFilter = ({ category, setCategory }) => {
  const handleClick = (e) => {
    setCategory(e.target.value);
    setTimeout(() => {
      window.location.href = '#two';
    }, 300);
  };
  return (
    <div className="cat-filter-div">
      {categories.map((item) => (
        <button className={`cat-btn${category === item ? '-selected' : ''}`} type="button" key={item} value={item} onClick={(e) => handleClick(e)}>{item}</button>))}

    </div>
  );
};
CatFilter.propTypes = {
  setCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default CatFilter;

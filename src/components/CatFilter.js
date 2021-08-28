import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/catFilter.css';

const categories = ['Ordinary Drink', 'Cocktail', 'Milk / Float / Shake', 'Other/Unknown', 'Cocoa', 'Shot', 'Coffee / Tea', 'Homemade Liqueur', 'Punch / Party Drink', 'Soft Drink / Soda'];

const CatFilter = ({ category, setCategory }) => (
  <div className="cat-filter-div">
    {categories.map((item) => (
      <button className={`cat-btn${category === item ? '-selected' : ''}`} type="button" key={item} value={item} onClick={(e) => setCategory(e.target.value)}>{item}</button>))}

  </div>
);

CatFilter.propTypes = {
  setCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default CatFilter;

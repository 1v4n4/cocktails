import React from 'react';
import PropTypes from 'prop-types';

const categories = ['Ordinary Drink', 'Cocktail', 'Milk / Float / Shake', 'Other/Unknown', 'Cocoa', 'Shot', 'Coffee / Tea', 'Homemade Liqueur', 'Punch / Party Drink', 'Soft Drink / Soda'];

const CatFilter = ({ setCategory }) => (
  <div className="cat-filter-div">
    {categories.map((item) => (
      <button type="button" key={item} value={item} onClick={(e) => setCategory(e.target.value)}>{item}</button>))}

  </div>
);

CatFilter.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default CatFilter;

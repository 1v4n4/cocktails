import React from 'react';
import PropTypes from 'prop-types';

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const LetterFilter = ({ setLetter }) => (
  <div className="letter-filter-div">
    {alphabet.map((item) => (
      <button type="button" key={item} value={item} onClick={(e) => setLetter(e.target.value)}>{item.toUpperCase()}</button>))}
  </div>
);

LetterFilter.propTypes = {
  setLetter: PropTypes.func.isRequired,
};

export default LetterFilter;

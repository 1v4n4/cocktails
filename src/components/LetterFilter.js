import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/letterFilter.css';

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const LetterFilter = ({ letter, setLetter }) => {
  const handleClick = (e) => {
    setLetter(e.target.value);
    setTimeout(() => {
      window.location.href = '#letter';
    }, 300);
  };

  return (

    <div id="letter" className="letter-filter-div">
      {alphabet.map((item) => (
        <button type="button" className={`letter-btn${letter === item ? '-selected' : ''}`} key={item} value={item} onClick={(e) => handleClick(e)}>{item.toUpperCase()}</button>))}
    </div>
  );
};
LetterFilter.propTypes = {
  setLetter: PropTypes.func.isRequired,
  letter: PropTypes.string.isRequired,
};

export default LetterFilter;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../CSS/cocktailPreview.css';

const Prev = (props) => {
  const { list } = props;

  return (

    <div className="prev-container">
      {list.map((item) => (
        <div className="prev-cart" key={item.idDrink}>

          <Link to={`/cocktail/${item.strDrink}`}><h3>{item.strDrink}</h3></Link>
          <img className="thumb" src={item.strDrinkThumb} alt="cocktail-img" />

        </div>
      ))}

    </div>

  );
};

Prev.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
};
export default Prev;

import React from 'react';
import { Link } from 'react-router-dom';

const Prev = (name, thumb) => (
  <div className="prev-cart">
    <Link to={`/cocktail/${name}`}>{name}</Link>
    <img src={thumb} alt="cocktail-img" />
  </div>
);
export default Prev;

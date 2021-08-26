import React from 'react';
import { useSelector } from 'react-redux';

/* eslint-disable */
const Cocktail = (props) => {
  const name = props.match.params.cocktail;
  const state = useSelector((state) => state.cocktails)
  const cocktail = state.data.filter(item => item.strDrink === name)
  console.log('koktel', cocktail)

  return (<div><p>Cocktail</p></div>);
};
export default Cocktail;

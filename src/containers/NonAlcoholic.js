import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNonAlco } from '../actions/nonAlcoActions';
import Prev from '../components/CocktailPreview';

const NonAlcoholic = () => {
  const dispatch = useDispatch();
  const fetchNonAlco = () => {
    dispatch(getNonAlco());
  };

  useEffect(() => {
    fetchNonAlco();
  }, []);

  const list = useSelector((state) => state.nonalcoholic);

  const showData = () => {
    if (list.loading) {
      return <h1>Loading...</h1>;
    }

    if (list.data && list.data.length === 0) {
      return <h1>No drinks found</h1>;
    }
    if (list.data && list.data.length > 0) {
      return (

        <Prev list={list.data} />

      );
    }
    if (list.errorMSG !== '') {
      return <h1>{list.errorMSG}</h1>;
    }
    return <p />;
  };

  return (
    <div className="container">
      <h1 className="cocktail-name">Non-alcoholic drinks</h1>
      {showData()}
    </div>
  );
};

export default NonAlcoholic;

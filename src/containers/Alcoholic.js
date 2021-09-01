import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlco } from '../actions/alcoActions';
import Prev from '../components/CocktailPreview';

const Alcoholic = () => {
  const dispatch = useDispatch();
  const fetchAlco = () => {
    dispatch(getAlco());
  };

  useEffect(() => {
    fetchAlco();
  }, []);

  const list = useSelector((state) => state.alcoholic);

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
      <h1 className="cocktail-name">Alcoholic drinks</h1>
      {showData()}
    </div>
  );
};
export default Alcoholic;

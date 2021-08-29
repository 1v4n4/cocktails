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
  console.log('lilist', list);

  const showData = () => {
    if (list.loading) {
      return <p className="loading-msg">Loading...</p>;
    }

    if (list.data && list.data.length === 0) {
      return <p className="nodrinks-msg">No drinks found</p>;
    }
    if (list.data && list.data.length > 0) {
      return (

        <Prev list={list.data} />

      );
    }
    if (list.errorMSG !== '') {
      return <p className="show-data-msg">{list.errorMSG}</p>;
    }
    return <p />;
  };

  return (
    <div className="container">
      <h1 className="coctail-name">Non-alcoholic drinks</h1>
      {showData()}
    </div>
  );
};

export default NonAlcoholic;

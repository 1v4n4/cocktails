import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LetterFilter from '../components/LetterFilter';
import { getLetterList } from '../actions/letterActions';
import Prev from '../components/CocktailPreview';
import letters from '../assets/letters.png';

const LetterList = () => {
  const list = useSelector((state) => state.cocktails);

  const [letter, setLetter] = useState('');

  const dispatch = useDispatch();

  const fetchData = (letter) => {
    dispatch(getLetterList(letter));
  };

  useEffect(() => {
    fetchData(letter);
  }, [letter]);

  const showData = () => {
    if (list.loading) {
      return <h1>Loading...</h1>;
    }

    if (list.data && list.data.length === 0) {
      return <h1>No drinks found</h1>;
    }
    if (list.data && list.data.length > 0) {
      return (
        <div>
          <img src={letters} className="filter-logo" alt="filter-logo" />
          <Prev list={list.data} />
        </div>
      );
    }

    if (list.errorMSG !== '') {
      return <h1>{list.errorMSG}</h1>;
    }
    return <p />;
  };

  return (
    <div id="one">
      <LetterFilter setLetter={setLetter} letter={letter} />
      {showData()}
    </div>
  );
};

export default LetterList;

import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import LetterFilter from '../components/LetterFilter';
import { getLetterList } from '../actions/letterActions';
import '../CSS/letterList.css';
import Prev from '../components/CocktailPreview';
import letters from '../assets/letters.png';

const LetterList = () => {
  const list = useSelector((state) => state.cocktails);
  console.log('list component, list:', list);

  const [letter, setLetter] = useState('');

  const dispatch = useDispatch();

  const fetchData = (letter) => {
    console.log('in fetchdata');
    dispatch(getLetterList(letter));
  };

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      console.log('true');
      isFirstRun.current = false;
      return;
    }
    fetchData(letter);
  }, [letter]);

  const showData = () => {
    if (list.loading) {
      return <p className="loading-msg">Loading...</p>;
    }

    if (list.data && list.data.length === 0) {
      return <p className="nodrinks-msg">No drinks found</p>;
    }
    if (list.data && list.data.length > 0) {
      console.log('here');
      return (
        <div>
          <hr />
          <img src={letters} className="filter-logo" alt="filter-logo" />
          <Prev list={list.data} />
          <hr />
        </div>
      );
    }

    if (list.errorMSG !== '') {
      return <p className="show-data-msg">{list.errorMSG}</p>;
    }
    return <p />;
  };

  return (
    <div>
      <LetterFilter setLetter={setLetter} letter={letter} />
      <p>{showData()}</p>
    </div>
  );
};

export default LetterList;

import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getList } from '../actions';

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const LetterFilter = () => {
  const [letter, setLetter] = useState('');

  const dispatch = useDispatch();

  const fetchData = (letter) => {
    console.log('in fetchdata');
    dispatch(getList(letter));
  };

  useEffect(() => {
    fetchData(letter);
  }, [letter]);

  return (
    <div>
      {alphabet.map((item) => (
        <button type="button" key={item} value={item} onClick={(e) => setLetter(e.target.value)}>{item.toUpperCase()}</button>))}
    </div>
  );
};

export default LetterFilter;

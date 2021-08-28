import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LetterFilter from '../components/LetterFilter';
import { getLetterList } from '../actions';

const LetterList = () => {
  const list = useSelector((state) => state.cocktails);
  console.log('list component, list:', list);

  const [letter, setLetter] = useState('');

  const dispatch = useDispatch();

  const fetchData = (letter) => {
    console.log('in fetchdata');
    dispatch(getLetterList(letter));
  };

  useEffect(() => {
    fetchData(letter);
  }, [letter]);

  const showData = () => {
    if (list.loading) {
      return <p className="show-data-msg">Loading...</p>;
    }

    if (list.data && list.data.length === 0) {
      return <p className="nodrinks-msg">No drinks found</p>;
    }
    if (list.data && list.data.length > 0) {
      return (
        <div className="prev-container">
          {list.data.map((item) => (
            <div className="prev-cart" key={item.idDrink}>

              <Link to={`/cocktail/${item.strDrink}`} className="prev-link"><h3>{item.strDrink}</h3></Link>
              <img className="thumb" src={item.strDrinkThumb} alt="cocktail-img" />

            </div>
          ))}

        </div>

      );
    }

    if (list.errorMSG !== '') {
      return <p className="show-data-msg">{list.errorMSG}</p>;
    }
    return <p className="show-data-msg">Yikes! No data</p>;
  };

  return (
    <div>
      <h1>List</h1>
      <LetterFilter setLetter={setLetter} />
      <p>{showData()}</p>
    </div>
  );
};

export default LetterList;

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LetterFilter from '../components/LetterFilter';

const List = () => {
  const list = useSelector((state) => state.cocktails);
  console.log('list component, list:', list);

  const showData = () => {
    if (list.loading) {
      return <p className="show-data-msg">Loading...</p>;
    }

    if (list.data && list.data.length === 0) {
      return <p className="nodrinks-msg">No drinks found</p>;
    }
    if (list.data && list.data.length > 0) {
      return (
        <div>
          {list.data.map((item) => (
            <Link to={`/cocktail/${item.strDrink}`} key={item.idDrink}>{item.strDrink}</Link>
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
      <LetterFilter />
      <p>{showData()}</p>
    </div>
  );
};

export default List;

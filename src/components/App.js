import '../CSS/App.css';
import LetterList from '../containers/LetterList';
import SearchList from '../containers/SearchList';
import CategoryList from '../containers/CategoryList';

function App() {
  return (
    <div className="App">
      <p>Hey</p>
      <SearchList />
      <LetterList />
      <CategoryList />
    </div>
  );
}

export default App;

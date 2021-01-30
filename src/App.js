import './App.css';
import {FakeData} from './FakeData';
import {useState} from 'react';

function App() {
  const [data] = useState(FakeData);
  const [searchData, setSearchData] = useState([]);

  const renderList = (name) => 
  {
    return name.map((name, i) => 
    {
      return (
        <li key={i}>{name}</li>
      )
    });
  };

  const onSearchInput = (e) => 
  {
    if(!e)
    {
      setSearchData(data);
      return;
    }
    const input = e.toUpperCase();
    let nameList = data;
    nameList = nameList.filter((name) => name.toUpperCase().includes(input));
    if(nameList.length === 0) nameList.push('No matching names');
    setSearchData(nameList);

  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of Baby Names</h1>
        <div>
          <label>Search: </label>
          <input type='text' placeholder='Search for name...' onKeyUp={e => onSearchInput(e.target.value)}/>
        </div>
        <ul className='nameList'>
          {searchData.length === 0 ? renderList(data) : renderList(searchData)}
        </ul>
      </header>
    </div>
  );
}

export default App;

// import { useEffect, useState } from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  // const [data, setData] = useState('');
  // const [category, setCategory] = useState('abc');

  // fetch data from server
  // useEffect(() => {
  //   fetch(`/api/quotes/${category}`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, [category]);

  // useEffect(() => {
  //   fetch(`/api/quotes`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <Home />
        {/* <p>{data ? data : 'Loading...'}</p> */}
      </header>
    </div>
  );
}

export default App;

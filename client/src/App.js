import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');
  const [category, setCategory] = useState('abc');

  // fetch data from server
  useEffect(() => {
    fetch(`/api/quotes/${category}`)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, [category]);

  // useEffect(() => {
  //   fetch(`/api/quotes`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{data ? data : 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');
  const [category, setCategory] = useState('abcde');

  // fetch data from server
  useEffect(() => {
    fetch(`/api/quotes/${category}`)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, [category]);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{data ? data : 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;

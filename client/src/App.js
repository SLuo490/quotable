import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  // fetch data from server
  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .then((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{data ? data : 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;

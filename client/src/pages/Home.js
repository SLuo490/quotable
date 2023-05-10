import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Quote from '../components/Quote';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import '../styles/home.css';

import { db, collection, addDoc } from '../utils/firebase.js';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Age');
  const [data, setData] = useState([]);

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  const test = async () => {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
    console.log('Document written with ID: ', docRef.id);
  };

  // fetch data from server
  useEffect(() => {
    fetch(`/api/quotes/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [selectedCategory]);

  const quotes = data.map((quote) => {
    return <Quote key={v4()} quote={quote} />;
  });

  // refresh the page with selected category when clicked
  function handleRefresh() {
    fetch(`/api/quotes/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  return (
    <div>
      <Nav />
      <div className='d-flex'>
        <div>
          <Sidebar onSelectCategory={handleCategorySelect} />
        </div>
        <div>
          <div className='quotes d-flex flex-wrap'>
            {quotes.length > 0 ? (
              quotes
            ) : (
              <h1 className='text-center mt-5'>No quotes found</h1>
            )}
          </div>
          <div>
            <button
              className='btn btn-primary float-end me-3 mt-3'
              onClick={handleRefresh}
            >
              Refresh
            </button>
            <button onClick={() => test()}>Test Firebase</button>
          </div>
        </div>
      </div>
    </div>
  );
}

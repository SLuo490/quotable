import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Quote from '../components/Quote';
import { useState, useEffect } from 'react';
import '../styles/home.css';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Age');
  const [data, setData] = useState([]);

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  // fetch data from server
  useEffect(() => {
    fetch(`/api/quotes/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [selectedCategory]);

  const quotes = data.map((quote) => {
    return <Quote key={quote._id} quote={quote} />;
  });

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
            <button className='btn btn-primary float-end me-3 mt-3'>
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

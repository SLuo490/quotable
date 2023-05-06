import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import { useState, useEffect } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [data, setData] = useState('');

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  // fetch data from server
  useEffect(() => {
    fetch(`/api/quotes/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, [selectedCategory]);

  return (
    <div>
      <Nav />
      <div className='d-flex'>
        <div className=''>
          <Sidebar onSelectCategory={handleCategorySelect} />
        </div>
        <div className=''>
          <h1>Content</h1>
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
}

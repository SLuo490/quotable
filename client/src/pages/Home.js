import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Quote from '../components/Quote';
import { useState, useEffect } from 'react';
import '../styles/home.css';

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
          <div className='quotes d-flex flex-wrap'>
            <Quote />
            <Quote />
            <Quote />
            <Quote />
            <Quote />
            <Quote />
            <Quote />
            <Quote />
            <Quote />
            <Quote />
          </div>
        </div>
      </div>
    </div>
  );
}

import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  return (
    <div>
      <Nav />
      <div className='d-flex'>
        <div className=''>
          <Sidebar onSelectCategory={handleCategorySelect} />
        </div>
        <div className=''>
          <h1>Content</h1>
          <p>{selectedCategory}</p>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import '../styles/sidebar.css';

export default function Sidebar({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      'Age',
      'Alone',
      'Amazing',
      'Anger',
      'Architecture',
      'Art',
      'Attitude',
      'Beauty',
      'Best',
      'Birthday',
      'Business',
      'Car',
      'Change',
      'Computers',
      'Cool',
      'Courage',
      'Dad',
      'Dating',
      'Death',
      'Design',
      'Dreams',
      'Environmental',
      'Education',
      'Equality',
      'Experience',
      'Failure',
      'Faith',
      'Family',
      'Famous',
      'Fear',
      'Fitness',
      'Food',
      'Forgiveness',
      'Freedom',
      'Friendship',
      'Funny',
      'Future',
      'God',
      'Good',
      'Government',
      'Graduation',
      'Great',
      'Happiness',
      'Health',
      'History',
      'Home',
      'Hope',
      'Humor',
      'Imagination',
      'Inspirational',
      'Intelligence',
      'Jealousy',
      'Knowledge',
      'Leadership',
      'Learning',
      'Legal',
      'Life',
      'Love',
      'Marriage',
      'Medical',
      'Men',
      'Mom',
      'Money',
      'Morning',
      'Movies',
      'Success',
    ]);
  }, []);

  function handleCategorySelect(category) {
    onSelectCategory(category);
  }

  return (
    <div
      className='list-unstyled flex-grow-1 overflow-auto'
      style={{
        overflowY: 'scroll',
        height: 'calc(100vh - 56px)',
      }}
    >
      {categories.map((category, index) => (
        <div className='text-center px-2 pt-2' key={index}>
          <button
            className='btn btn-sidebar w-100'
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        </div>
      ))}
    </div>
  );
}

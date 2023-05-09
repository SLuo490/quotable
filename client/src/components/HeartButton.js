import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

export default function HeartButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='position-absolute bottom-0 end-0'>
      <button className='btn me-2 mb-2' onClick={() => setIsLiked(!isLiked)}>
        <FontAwesomeIcon
          icon={isLiked ? faHeart : faHeartEmpty}
          color={isLiked ? 'red' : 'black'}
        />
      </button>
    </div>
  );
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import { db, collection, addDoc } from '../utils/firebase.js';
import { deleteDoc } from 'firebase/firestore';

export default function Quote(props) {
  const [isLiked, setIsLiked] = useState(false);

  // add quote to firestore if liked
  useEffect(() => {
    const updateFirestore = async () => {
      try {
        if (isLiked) {
          const docRef = await addDoc(collection(db, 'quotes'), {
            quote: props.quote.quote,
            author: props.quote.author,
            category: props.quote.category,
          });
          console.log('Document written with ID: ', docRef.id);
        }
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    };
    updateFirestore();
  }, [isLiked, props.quote]);

  return (
    <div className='card quote-card'>
      <div className='card-body mb-5'>
        <p className='card-text text-center'>{props.quote.quote}</p>
        <p className='card-text text-end'>- {props.quote.author}</p>

        <div className='position-absolute bottom-0 end-0'>
          <button
            className='btn me-2 mb-2'
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          >
            <FontAwesomeIcon
              icon={isLiked ? faHeart : faHeartEmpty}
              color={isLiked ? 'red' : 'black'}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

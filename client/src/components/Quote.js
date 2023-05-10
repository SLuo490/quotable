import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import { db, collection } from '../utils/firebase.js';

import {
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

export default function Quote(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [docId, setDocId] = useState(null);

  // check if quote is liked
  useEffect(() => {
    const getLikedQuote = async () => {
      const collectionRef = collection(db, 'quotes');
      const q = query(collectionRef, where('quote', '==', props.quote.quote));

      const querySnapshot = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setDocId(doc.id);
          setIsLiked(true);
        });
      });

      return querySnapshot;
    };
    getLikedQuote();
  }, [props.quote]);

  const handleLike = async () => {
    if (!isLiked) {
      try {
        // add to firestore if liked
        const docRef = await addDoc(collection(db, 'quotes'), {
          quote: props.quote.quote,
          author: props.quote.author,
          category: props.quote.category,
        });
        setDocId(docRef.id);
        setIsLiked(true);
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else {
      try {
        // delete from firestore if unliked
        await deleteDoc(doc(db, 'quotes', docId));
        setDocId(null);
        setIsLiked(false);
        console.log('Document with ID', docId, 'deleted');
      } catch (e) {
        console.error('Error deleting document: ', e);
      }
    }
  };

  return (
    <div className='card quote-card'>
      <div className='card-body mb-5'>
        <p className='card-text text-center'>{props.quote.quote}</p>
        <p className='card-text text-end'>- {props.quote.author}</p>

        <div className='position-absolute bottom-0 end-0'>
          <button className='btn me-2 mb-2' onClick={handleLike}>
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

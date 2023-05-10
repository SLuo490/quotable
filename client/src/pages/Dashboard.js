import Nav from '../components/Nav';
import Quote from '../components/Quote';
import { db } from '../utils/firebase.js';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

export default function Dashboard() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getLikedQuotes = async () => {
      const collectionRef = collection(db, 'quotes');
      const q = query(collectionRef);

      const unSubscribe = onSnapshot(q, (querySnapshot) => {
        const quotes = [];
        querySnapshot.forEach((doc) => {
          quotes.push(doc.data());
        });
        setQuotes(quotes);
      });
      return unSubscribe;
    };
    getLikedQuotes();
  }, []);

  return (
    <div>
      <Nav />
      <h1 className='text-center mt-3'>Dashboard</h1>
      <div className='quotes d-flex flex-wrap'>
        {quotes.length > 0 ? (
          quotes.map((quote) => {
            return <Quote key={v4()} quote={quote} />;
          })
        ) : (
          <h1 className='text-center mt-5'>No quotes found</h1>
        )}
      </div>
    </div>
  );
}

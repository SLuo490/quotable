import Nav from '../components/Nav';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db, collection } from '../utils/firebase.js';
import { addDoc } from 'firebase/firestore';

export default function Create() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  function handleQuoteChange(e) {
    setQuote(e.target.value);
  }

  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // add quote to firebase
      const docRef = await addDoc(collection(db, 'quotes'), {
        quote: quote,
        author: author,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    return navigate('/dashboard');
  };

  return (
    <div>
      <Nav />
      <h1 className='text-center mt-3'>Create</h1>
      <div className='container d-flex justify-content-center'>
        <form action='/dashboard' className='w-75'>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>
              Enter your quote
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
              onChange={handleQuoteChange}
            ></textarea>
          </div>
          <div className='mb-3'>
            <label htmlFor='author' className='form-label'>
              Author
            </label>
            <input
              type='text'
              className='form-control'
              id='author'
              onChange={handleAuthorChange}
            />
          </div>
          <button
            className='btn btn-primary float-end mt-3'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

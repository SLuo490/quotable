import Nav from '../components/Nav';
import ErrorAlert from '../components/ErrorAlert';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { db, collection } from '../utils/firebase.js';
import { addDoc } from 'firebase/firestore';

export default function Edit() {
  const location = useLocation();
  console.log(location.state);
  const [quote, setQuote] = useState(location.state?.quote || '');
  const [author, setAuthor] = useState(location.state?.author || 'Anonymous');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleQuoteChange(e) {
    setQuote(e.target.value);
  }

  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }

  function handleCancel(e) {
    e.preventDefault();
    setQuote('');
    setAuthor('');
    setError('');
    navigate('/dashboard');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // form validation
    if (!quote || !author) {
      setError('Please fill in all fields');
      return;
    }

    if (quote.length > 200) {
      return setError('Quote cannot be more than 200 characters');
    }

    try {
      // add quote to firebase
      const docRef = await addDoc(collection(db, 'quotes'), {
        quote: quote,
        author: author,
        canEdit: true,
        time: new Date(),
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
      <h1 className='text-center mt-3'>Edit</h1>
      {error && <ErrorAlert details={error} />}
      <div className='container d-flex justify-content-center'>
        <form action='/dashboard' className='w-75'>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>
              Edit your quote
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
              value={quote}
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
              value={author}
              onChange={handleAuthorChange}
            />
          </div>
          <button
            className='btn btn-primary float-end mt-3'
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className='btn btn-secondary float-end mt-3 me-2'
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

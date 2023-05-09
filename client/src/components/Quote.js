import React from 'react';
import HeartButton from './HeartButton';

export default function Quote(props) {
  return (
    <div className='card quote-card'>
      <div className='card-body mb-5'>
        <p className='card-text text-center'>{props.quote.quote}</p>
        <p className='card-text text-end'>- {props.quote.author}</p>

        <HeartButton />
      </div>
    </div>
  );
}

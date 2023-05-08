import React from 'react';

export default function Quote(props) {
  return (
    <div className='card quote-card'>
      <div className='card-body mb-5'>
        <p className='card-text text-center'>{props.quote.quote}</p>
        <p className='card-text text-end'>- {props.quote.author}</p>

        <div className='position-absolute bottom-0 end-0'>
          <button className='btn btn-primary me-2 mb-2'>Like</button>
        </div>
      </div>
    </div>
  );
}

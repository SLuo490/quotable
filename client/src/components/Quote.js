import React from 'react';

export default function Quote() {
  return (
    <div className='card quote-card'>
      <div className='card-body'>
        <p className='card-text text-center'>
          “The greatest glory in living lies not in never falling, but in rising
          every time we fall.”
        </p>
        <p className='card-text text-end'>-Nelson Mandela</p>

        <div className='d-flex justify-content-end'>
          <button className='btn btn-primary'>Like</button>
        </div>
      </div>
    </div>
  );
}

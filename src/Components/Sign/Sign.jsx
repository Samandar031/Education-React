import React from 'react';
import "./Sign.css"

const Sign = () => {
  return (
    <div className='Sign'>
      <div>
        Subscribe to our newsletter
      </div>
      <hr/>
      <button type="button" className="btn btn-success btn-lg px-4 gap-3">Send</button>

    </div>
  );
};

export default Sign;
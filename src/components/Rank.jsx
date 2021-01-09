import React from 'react';
import './Rank.css';

const Rank = (props) => {
  const { name, rank } = props;
  return (
    <div className='rank mt-4 text-center'>
      <div className='rank-message'>
        {`${name}, your current number of entries is ...`}
      </div>
      <div className='rank-number'>
        {`${rank}`}
      </div>
    </div>
  )
}

export default Rank;
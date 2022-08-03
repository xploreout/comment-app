import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutLink() {
  return (
    <div className='about-icon'>
      <Link to={{pathname: '/about', search:'?sort-name', hash: '#hello'}}
      >
        <FaQuestion size={25}/>
      </Link>
    </div>
  );
}

export default AboutLink;

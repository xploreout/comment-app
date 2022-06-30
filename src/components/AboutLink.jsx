import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutLink() {
  return (
    <div className='about-icon'>
      <Link to='/about'>
        <FaQuestion size={30}>About</FaQuestion>
      </Link>
    </div>
  );
}

export default AboutLink;

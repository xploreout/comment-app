import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Card>
      {' '}
      <div className='about'>
        <h2>About this application</h2>
        <p>This is a React app to leave rating and comment for a survey</p>
        <p>
          <Link to='/'>Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;

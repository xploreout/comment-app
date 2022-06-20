import React from 'react';
import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <div className='container'>
      <h2>{text}</h2>
    </div>
  );
}

Header.defaultProps = {
  text: 'Yes your comment',
};

Header.protoTypes = {
  text: PropTypes.string.isRequired
  
};
export default Header;
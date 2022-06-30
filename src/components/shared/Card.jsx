import React from 'react';
import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  // return <div className='card'>{children}</div>;

  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : 'rgba(0,0,0,0.4)',
      }}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

Card.defaultProps = {
  reverse: false,
};

export default Card;

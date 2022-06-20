import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

function SurveyItem({ item }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close'>
        <FaTimes />
      </button>
      <div className='text-disply'>{item.text} </div>
    </Card>
  );
}

SurveyItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default SurveyItem;

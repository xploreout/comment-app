import React from 'react';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types'

function SurveyItem({ item, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{item && item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes />
      </button>
      <div className='text-disply'>{item && item.text} </div>
    </Card>
  );
}
SurveyItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default SurveyItem;

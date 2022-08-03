import React, { useContext } from 'react';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SurveyContext from './context/SurveyContext';

function SurveyItem({ item }) {
  const {deleteItem, editItem} = useContext(SurveyContext);
  
  return (
    <Card>
      <div className='num-display'>{item && item.rating}</div>
      <button className='close' onClick={() => deleteItem(item.id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editItem(item)}>
        <FaEdit color='purple'/>
      </button>
     
      <div className='text-disply'>{item && item.text} </div>
    </Card>
  );
}
SurveyItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default SurveyItem;

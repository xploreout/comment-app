import React from 'react';
import SurveyItem from './SurveyItem ';
import PropTypes from 'prop-types';

function SurveyList({ survey, handleDelete }) {
  return (
    <div>
      {survey.map((item) => (
        <SurveyItem key={item.id} item={item} handleDelete={handleDelete}/>
      ))}
    </div>
  );
}

SurveyList.propTypes = {
  // feedback: PropTypes.array.isRequired
  survey: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default SurveyList;

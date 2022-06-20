import React from 'react';
import SurveyItem from './SurveyItem ';
import PropTypes from 'prop-types';

function SurveyList({ feedback }) {
  return (
    <div>
      {feedback.map((item) => (
        <SurveyItem key={item.id} item={item} />
      ))}
    </div>
  );
}

SurveyList.propTypes = {
  // feedback: PropTypes.array.isRequired
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default SurveyList;

import React from 'react';
import PropTypes from 'prop-types';

function SurveyStats({ feedback }) {
  let average =
    feedback &&
    feedback.reduce((cum, current) => {
      return cum + current.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h5>{feedback.length} Reviews</h5>
      <h5>Average Rating: {isNaN(average) ? 0 : average}</h5>
    </div>
  );
}

SurveyStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default SurveyStats;

import React, { useContext } from 'react';
import SurveyContext from './context/SurveyContext';

function SurveyStats() {
  const { feedback } = useContext(SurveyContext);
  let average =
    feedback &&
    feedback.reduce((cum, current) => {
      return cum + current.rating;
    }, 0) / feedback.length;
  average = average && average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h5>{feedback && feedback.length} Reviews</h5>
      <h5>Average Rating: {isNaN(average) ? 0 : average}</h5>
    </div>
  );
}

export default SurveyStats;

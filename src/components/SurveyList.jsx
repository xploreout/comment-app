import React from 'react';
import SurveyItem from './SurveyItem ';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

function SurveyList({ survey, handleDelete }) {
  return (
    <div>
      <AnimatePresence>
        {survey.map((item) => (
          <motion.div
            key={item.id}
            inherit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SurveyItem key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div>
  //     {survey.map((item) => (
  //       <SurveyItem key={item.id} item={item} handleDelete={handleDelete}/>
  //     ))}
  //   </div>
  // );
}

SurveyList.propTypes = {
  survey: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default SurveyList;

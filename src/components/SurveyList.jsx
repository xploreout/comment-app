import React, { useContext } from 'react';
import SurveyItem from './SurveyItem ';
import { motion, AnimatePresence } from 'framer-motion';
import SurveyContext from './context/SurveyContext';

function SurveyList() {
  const { survey } = useContext(SurveyContext);

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
            <SurveyItem key={item.id} item={item}  />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div>

  //     {survey && survey.map((item) => (

  //       <SurveyItem key={item.id} item={item} />
  //     ))}
  //   </div>
  // );
}

export default SurveyList;

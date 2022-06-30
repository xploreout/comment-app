import React, { useContext } from 'react';
import SurveyItem from './SurveyItem ';
import { motion, AnimatePresence } from 'framer-motion';
import SurveyContext from './context/SurveyContext';

function SurveyList({ handleDelete }) {
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
            <SurveyItem key={item.id} item={item}handleDelete={handleDelete} />
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


export default SurveyList;

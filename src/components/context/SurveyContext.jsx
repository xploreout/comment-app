import React, { createContext, useState } from 'react';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [survey, setSurvey] = useState([
    { id: 1, rating: 10, text: 'First comment' },
  ]);
  return (
    <SurveyContext.Provider value={{ survey }}>
      {children}
    </SurveyContext.Provider>
  );
};

export default SurveyContext;

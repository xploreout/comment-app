import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import SurveyData from './data/SurveyData';
import SurveyList from './components/SurveyList';

function App() {
  const [survey, setSurvey] = useState(SurveyData);
  return (
    <>
      <Header />
      <div className='container'>
        <SurveyList feedback={survey}  />
      </div>
    </>
  );
}
export default App;

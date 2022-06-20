import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import SurveyData from './data/SurveyData';
import SurveyList from './components/SurveyList';

function App() {
  const [survey, setSurvey] = useState(SurveyData);

  const deleteItem = (id) => {
    if (window.confirm('Are you share to delete the comment?')) {
      setSurvey(survey.filter((item) => item.id !== id ))
    }
 
  };
  return (
    <>
      <Header />
      <div className='container'>
        <SurveyList feedback={survey} handleDelete={deleteItem} />
      </div>
    </>
  );
}
export default App;

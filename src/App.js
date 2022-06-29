import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import { useState } from 'react';
import SurveyData from './data/SurveyData';
import SurveyList from './components/SurveyList';
import SurveyStats from './components/SurveyStats';
import SurveyForm from './components/SurveyForm';

function App() {
  const [survey, setSurvey] = useState(SurveyData);

  const addItem = (newItem) => {
    newItem.id = uuidv4();
    setSurvey([newItem, ...survey])
  };
  const deleteItem = (id) => {
    if (window.confirm('Are you share to delete the comment?')) {
      setSurvey(survey.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className='container'>
        <SurveyForm handleAddSurvey={addItem} />
        <SurveyStats feedback={survey} />
        <SurveyList survey={survey} handleDelete={deleteItem} />
      </div>
    </>
  );
}
export default App;

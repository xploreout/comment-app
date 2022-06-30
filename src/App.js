import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import AboutLink from './components/AboutLink';
import { useState } from 'react';
import Card from './components/shared/Card';
import About from './pages/About';
import SurveyData from './data/SurveyData';
import SurveyList from './components/SurveyList';
import SurveyStats from './components/SurveyStats';
import SurveyForm from './components/SurveyForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

function App() {
  const [survey, setSurvey] = useState(SurveyData);

  const addItem = (newItem) => {
    newItem.id = uuidv4();
    setSurvey([newItem, ...survey]);
  };

  const deleteItem = (id) => {
    if (window.confirm('Are you share to delete the comment?')) {
      setSurvey(survey.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <SurveyForm handleAddSurvey={addItem} />
                <SurveyStats feedback={survey} />
                <SurveyList survey={survey} handleDelete={deleteItem} />
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card>
        <AboutLink />
      </div>
    </Router>
  );
}
export default App;

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import AboutLink from './components/AboutLink';
import { useState } from 'react';
import About from './pages/About';
import SurveyData from './data/SurveyData';
import SurveyList from './components/SurveyList';
import SurveyStats from './components/SurveyStats';
import SurveyForm from './components/SurveyForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SurveyProvider } from './components/context/SurveyContext';

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
    <SurveyProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <SurveyForm handleAddSurvey={addItem} />
                  <SurveyStats />
                  <SurveyList  handleDelete={deleteItem} />
                </>
              }
            />
            <Route path='/about' element={<About />} />
            {/* <Route path='/post/*' element={<Post />} /> */}
            {/* <Route path='/post/:id/:name' element={<Post />} /> */}
            {/* <Route path='/post/*' element={<Post />} /> */}
          </Routes>
          {/* <Card>
          <NavLink to='/' activeClassName='active'>
          Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
          About
          </NavLink>
        </Card> */}
          <AboutLink />
        </div>
      </Router>
    </SurveyProvider>
  );
}
export default App;

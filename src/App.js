import React from 'react';
import Header from './components/Header';
import AboutLink from './components/AboutLink';
import About from './pages/About';
import SurveyList from './components/SurveyList';
import SurveyStats from './components/SurveyStats';
import SurveyForm from './components/SurveyForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SurveyProvider } from './components/context/SurveyContext';

function App() {
  const addSurvey = (newSurvey) => {};

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
                  <SurveyForm handleAdd={addSurvey} />
                  <SurveyStats />
                  <SurveyList />
                </>
              }
            />
            <Route path='/about' element={<About />} />
            {/* example of getting params from url w useParams */}
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

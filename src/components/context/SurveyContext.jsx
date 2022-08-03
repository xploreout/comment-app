import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [survey, setSurvey] = useState([
    { id: 1, rating: 10, text: 'Great service first comment' },
    { id: 2, rating: 9, text: 'second comment' },
    { id: 3, rating: 5, text: 'third comment' },
  ]);

  const [surveyEdit, setSurveyEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteItem = (id) => {
    if (window.confirm('Are you sure to delete the comment?')) {
      setSurvey(survey.filter((item) => item.id !== id));
    }
  };

  const editItem = (item) => {
    setSurveyEdit({
      item,
      edit: true
    });
  };

  const updateItem = (id, updateItem)=> {
    setSurvey(survey.map((item)=> item.id === id ? {...item, ...updateItem} : item))
  }

  const addItem = (newItem) => {
    newItem.id = uuidv4();
    setSurvey([newItem, ...survey]);
  };

  return (
    <SurveyContext.Provider value={{ survey,  deleteItem, addItem, editItem, surveyEdit, updateItem }}>
      {children}
    </SurveyContext.Provider>
  );
};

export default SurveyContext;

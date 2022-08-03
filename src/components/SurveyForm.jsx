import React, { useContext } from 'react';
import Card from './shared/Card';
import Rating from './Rating';
import { useState, useEffect } from 'react';
import Button from './shared/Button';
import SurveyContext from './context/SurveyContext';

function SurveyForm({ handleAdd }) {
  const [message, setMessage] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { addItem, surveyEdit, updateItem } = useContext(SurveyContext);

  useEffect(() => {
    if (surveyEdit.edit === true) {
      setBtnDisabled(false);
      setComment(surveyEdit.item.text);
      setRating(surveyEdit.item.rating);
    }
  }, [surveyEdit]);
  const handleChange = (e) => {
    if (comment === '') {
      setBtnDisabled(true);
      setMessage('');
    } else if (comment.trim().length <= 10) {
      setMessage('Comment must be more than 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim().length > 10) {
      const newSurvey = {
        text: comment,
        rating,
      };
      if(surveyEdit.edit === true){
        updateItem(surveyEdit.item.id, newSurvey)
      } else {
        addItem(newSurvey);
      }
      setComment('');
      setRating(10)
      setBtnDisabled(false)
    }

  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h5>Please rate your experience with us</h5>
          <Rating select={setRating}  />
          <div className='input-group'>
            <input
              onChange={handleChange}
              value={comment}
              type='text'
              placeholder='Enter your review'
            />
            <Button
              type='submit'
              // version='secondary'
              isDisabled={btnDisabled}
              message={message}
            >
              Submit
            </Button>
          </div>
          {message && <div className='message'>{message}</div>}
        </form>
      </Card>
    </>
  );
}

export default SurveyForm;

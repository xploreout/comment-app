import React from 'react';
import Card from './shared/Card';
import Rating from './Rating';
import { useState } from 'react';
import Button from './shared/Button';

function SurveyForm({ handleAddSurvey }) {
  const [message, setMessage] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleChange = (e) => {
    if (comment === '') {
      setBtnDisabled(true);
      setMessage('');
    } else if (comment !== '' && comment.trim() <= 10) {
      setMessage('Comment must be more than 10 characters');
      setBtnDisabled(false);
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
      console.log(newSurvey);
      handleAddSurvey(newSurvey);
      setComment('');
    }
  };
  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h5>Please rate us</h5>
          <Rating selected={0} select={(rating) => setRating(rating)} />
          <div className='input-group'>
            <input
              onChange={handleChange}
              value={comment}
              type='text'
              placeholder='Enter your review'
            />
            <Button type='submit' isBtnDisabled={btnDisabled} message={message}>
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default SurveyForm;

import React from 'react';

function Rating({ select, selected }) {
  const handleChange = (e) => {
    select(+e.currentTarget.value);
  };
  return (
    <ul className='rating'>
      <li>
        <input
          type='radio'
          id='num3'
          name='3'
          value='3'
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          id='num2'
          name='2'
          value='2'
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          id='num1'
          name='1'
          value='1'
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
          type='radio'
          id='num4'
          name='4'
          value='4'
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input
          type='radio'
          id='num5'
          name='5'
          value='5'
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input
          type='radio'
          id='num6'
          name='6'
          value='6'
          onChange={handleChange}
          checked={selected === 6}
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input
          type='radio'
          id='num7'
          name='7'
          value='7'
          onChange={handleChange}
          checked={selected === 7}
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input
          type='radio'
          id='num8'
          name='8'
          value='8'
          onChange={handleChange}
          checked={selected === 8}
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input
          type='radio'
          id='num9'
          name='9'
          value='9'
          onChange={handleChange}
          checked={selected === 9}
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input
          type='radio'
          id='num10'
          name='10'
          value='10'
          onChange={handleChange}
          checked={selected === 10}
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  );
}

export default Rating;

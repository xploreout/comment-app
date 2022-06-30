import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const status = 200;

  const handleClick = () => {
    navigate('/about');
  };
  if (status === 404) {
    return <Navigate to='/notfound' />;
  }

  return (
    <div>
      <h1>Post</h1>
      {/* <h1>Post {params.id}</h1>
      <p>Name: {params.name}</p> */}
      <button onClick={handleClick}>About</button>
      <Routes>
        <Route path='/show' element={<h2>Showing route</h2>} />
      </Routes>
    </div>
  );
}

export default Post;

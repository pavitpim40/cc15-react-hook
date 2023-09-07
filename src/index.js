import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// step-1 : รู้ว่า user กดปุ่มไหน ?
// step-2 : Make HTTP Request , after setState

function App() {
  const [category, setCategory] = useState('not-select');
  const [data, setData] = useState([]);

  // https://jsonplaceholder.typicode.com/posts
  async function fetchLists() {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/${category}`);
      let dataJSON = await response.json();
      setData(dataJSON);
    } catch (error) {
      console.log(error);
    }
  }

  // SYNTAX : useEffect(FN,[...dependencies])
  // When useEffect work
  // => 1.After 1st Render

  // After every Render,Rerender
  // useEffect(() => {
  //   console.log('Effect Run');
  // });

  // After 1st Render Only
  // useEffect(() => {
  //   // fetchUserProfile
  //   console.log('Effect Run');
  // }, []);

  // After 1st Render , After category Change
  useEffect(() => {
    console.log('Effect Run :', category);
    if (category !== 'not-select') {
      fetchLists();
    }
  }, [category]);

  console.log('Render, Rerender', category);

  return (
    <div>
      <h1>useEffect : {category || 'not-select'}</h1>
      <div className='button__group'>
        <button onClick={() => setCategory('posts')}>posts</button>
        <button onClick={() => setCategory('users')}>users</button>
      </div>

      <ul className='lists'>
        {data.map((obj) => (
          <li className='lists__item' key={obj.id}>
            {obj.body || obj.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

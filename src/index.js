import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// step-1 : รู้ว่า user กดปุ่มไหน ?

function App() {
  const [category, setCategory] = useState('');
  const [count, setCount] = useState(0);

  // every render, rerender
  // useEffect(() => {
  //   console.log('## 1 Effect Hook - Every render, rerender');
  // });

  // Syntax : useEffect(setUp,dependenciesArray)
  useEffect(() => {
    console.log('## 2 Effect Hook - Category');
  }, [category]);

  useEffect(() => {
    console.log('## 3 : Effect Hook - Count');
  }, [count]);

  console.log('render, rerender');

  return (
    <div>
      <h1>useEffect : {category || 'not-select'}</h1>
      <div className='button__group'>
        <button onClick={() => setCategory('posts')}>posts</button>
        <button onClick={() => setCategory('photos')}>photos</button>
        <button onClick={() => setCategory('todos')}>todos</button>
        <button onClick={() => setCategory('users')}>users</button>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <div>{count}</div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
      </div>

      <ul className='lists'>
        <li className='lists__item'>item-1</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState([
    "a recommendation for women's shoes",
    'Recommend a good restaurant',
    'Crime City 3 review',
  ]);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h1 style={{ fontSize: '20px', color: 'gray' }}>ReactBlog</h1>
      </div>
      <div className='list'>
        <h2 className='tit'>{title[0]}</h2>
        <span className='date'>11/17</span>
      </div>
      <div className='list'>
        <h2 className='tit'>{title[1]}</h2>
        <span className='date'>11/17</span>
      </div>
      <div className='list'>
        <h2 className='tit'>{title[2]}</h2>
        <span className='date'>11/17</span>
      </div>
    </div>
  );
}

export default App;

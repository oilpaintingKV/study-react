import './App.css';
import { useState } from 'react';

function App() {
  let post = '토트넘 홋스퍼 스타디움 직관 후기';
  let [blogTitle, setBlogTitle] = useState([
    '맨유 올드 트래포드 직관 후기',
    '아스날 에미레이트 스타디움 직관 후기',
    '울버햄튼 몰리뉴 스타디움 홈구장 직관 후기',
  ]);

  return (
    <div className='App'>
      <header className='header'>
        <h1>blog</h1>
      </header>

      <div className='blog-area'>
        <ul className='blog-list'>
          <li className='blog-item'>
            <h2 className='title'>{blogTitle[0]}</h2>
            <span className='date'>5월 20일 발행</span>
          </li>
          <li className='blog-item'>
            <h2 className='title'>{blogTitle[1]}</h2>
            <span className='date'>5월 20일 발행</span>
          </li>
          <li className='blog-item'>
            <h2 className='title'>{blogTitle[2]}</h2>
            <span className='date'>5월 20일 발행</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

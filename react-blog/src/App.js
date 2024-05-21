import './App.css';
import { useState } from 'react';

function App() {
  let [blogTitle, setBlogTitle] = useState([
    '맨유 올드 트래포드 직관 후기',
    '울버햄튼 몰리뉴 스타디움 홈구장 직관 후기',
    '아스날 에미레이트 스타디움 직관 후기',
  ]);
  let [like, setLike] = useState(0);

  function titleHandler() {
    let copy = [...blogTitle];
    copy[0] = '토트넘 홋스퍼 스타디움 직관 후기';
    setBlogTitle(copy);
  }

  function likeHandler() {
    setLike(like + 1);
  }

  function sortHandler() {
    let copy = [...blogTitle];
    copy = copy.sort();
    setBlogTitle(copy);
  }

  return (
    <div className='App'>
      <header className='header'>
        <h1>⚽️</h1>
      </header>

      <div className='blog_area'>
        <div className='blog_btn_box'>
          <button className='btn btn_name_change' onClick={titleHandler}>
            change first title
          </button>
          <button className='btn btn_name_change' onClick={sortHandler}>
            sort
          </button>
        </div>
        <ul className='blog_list'>
          <li className='blog_item'>
            <button type='button' className='btn_blog'>
              <h2 className='title'>{blogTitle[0]}</h2>
              <span className='date'>5월 20일 발행</span>
            </button>
            <button className='btn_like' onClick={likeHandler}>
              🖤
              <span className='number'>{like}</span>
            </button>
          </li>
          <li className='blog_item'>
            <button type='button' className='btn_blog'>
              <h2 className='title'>{blogTitle[1]}</h2>
              <span className='date'>5월 20일 발행</span>
            </button>
            <button className='btn_like'>
              🖤
              <span className='number'>0</span>
            </button>
          </li>
          <li className='blog_item'>
            <button type='button' className='btn_blog'>
              <h2 className='title'>{blogTitle[2]}</h2>
              <span className='date'>5월 20일 발행</span>
            </button>
            <button className='btn btn_like'>
              🖤
              <span className='number'>0</span>
            </button>
          </li>
        </ul>

        <Modal></Modal>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className='blog_content'>
      <h3 className='title'>제목</h3>
      <span className='date'>5월 21일 발행</span>
      <p className='desc'>
        컨텐츠 내용 컨텐츠 내용 컨텐츠 내용 재미있는 축구 이야기
      </p>
    </div>
  );
}

export default App;

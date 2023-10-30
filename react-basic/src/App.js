import React from 'react';
// import './App.css';

import MyHeader from './MyHeader';

function App() {
  let name = 'oilpaintingKV';

  const style = {
    // 인라인 방식 style 지정 -> style 객체 만들기
    App: {
      backgroundColor: 'black',
    },
    h2: {
      color: 'white',
    },
    type_bold: {
      color: 'white',
      fontWeight: 'bold',
    },
  };

  const number = 5;

  return (
    <div style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>hi react!</h2>
      <span style={style.type_bold}>
        React.js
        {number}는 : {number % 2 === 0 ? '짝수' : '홀수'}
      </span>
    </div>
  );
}

export default App;

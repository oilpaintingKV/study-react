import logo from './logo.svg';
import './App.css';

function App() {
  let post = 'Gangnam kimchi Restaurant';
  return (
    <div className='App'>
      <div className='black-nav'>
        <h1 style={{ fontSize: '20px', color: 'gray' }}>BLOG</h1>
      </div>
      <h2>{post}</h2>
    </div>
  );
}

export default App;

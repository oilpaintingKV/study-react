import './App.css';

function App() {
  let post = '!strong start!';

  return (
    <div className='App'>
      <div className='nav'>
        <h1>blog</h1>
      </div>

      <div className='blog-area'>
        <h2 className='blog-title'>{post}</h2>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['IT cloud', 'Bigbang Theory', 'BEEF']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className='App'>
      {/* S : Navigation */}
      <div className='nav_black'>
        <h1>blog</h1>
      </div>
      {/* E : Navigation */}

      {/* S : Top Button */}
      <div className='btn_box'>
        <button
          className='btn btn_change'
          onClick={() => {
            let copy = [...title];
            copy[0] = 'Black Mirror';

            setTitle(copy);
          }}
        >
          title change
        </button>
        <button
          className='btn btn_sort'
          onClick={() => {
            let copy = [...title];
            copy.sort();

            setTitle(copy);
          }}
        >
          title sort
        </button>
      </div>
      {/* E : Top Button */}

      {/* S : Blog List */}
      <ul className='blog_list'>
        {title.map(function (a, i) {
          return (
            <li className='blog_list_item' key={i}>
              <a
                href='#'
                className='item_link'
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <h2 className='blog_title'>
                  {i + 1}. {a}
                </h2>
                <span className='blog_desc'>Posted on 01/22</span>
              </a>
              <button
                className='btn_like'
                onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                ❤️ <span className='like_count'>{like[i]}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* E : Blog List */}

      {/* S : Modal */}
      {modal == true ? (
        <Modal color='skyblue' setTitle={setTitle} title={title} />
      ) : null}
      {/* E : Modal */}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h3 className='modal_title'>{props.title[0]}</h3>
      <span className='modal_date'>date</span>
      <span className='modal_desc'>content</span>
      <div className='btn_box'>
        <button
          onClick={() => {
            props.setTitle(['Doctor Who', 'Bigbang Theory', 'BEEF']);
          }}
          className='btn btn_title_change'
        >
          edit title
        </button>
      </div>
    </div>
  );
}

export default App;

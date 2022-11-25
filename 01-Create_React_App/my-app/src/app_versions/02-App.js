import './App.css';
import { useState } from 'react';

function App () {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle('');
    setColor('#000000');
  };
  return (
    <div className='App'>
      <form onSubmit={submit}>
        <input
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
          type='text'
          placeholder='color title ...'
        >
        </input>
        <input
          value={color}
          type='color'
          onChange={(event) =>
            setColor(event.target.value)
          }
          >
        </input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
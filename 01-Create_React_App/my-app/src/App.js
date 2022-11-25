import './App.css';
import { useRef } from 'react';

function App () {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    console.log(hexColor);
    alert(`${title}, ${color}`);
    txtTitle.current.value = '';
    hexColor.current.value = '';
  };
  return (
    <div className='App'>
      <form onSubmit={submit}>
        <input
          ref={txtTitle}
          type='text'
          placeholder='color title ...'
        >
        </input>
        <input
          ref={hexColor}
          type='color'
          >
        </input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;

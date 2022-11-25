import './App.css';
import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] =
    useState(initialValue);
  return [
    {
      value,
      onchange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}

function App () {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] =
    useState('#000000');
  const submit = (e) => {
    e.preventDefault();
    alert(
      `${titleProps.value}, ${colorProps.value}`
    );
    resetTitle();
    resetColor();
  };
  return (
    <div className='App'>
      <form onSubmit={submit}>
        <input
          {...titleProps}
          type='text'
          placeholder='color title ...'
        >
        </input>
        <input
          {...colorProps}
          type='color'
          >
        </input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;

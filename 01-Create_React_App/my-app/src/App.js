import './App.css';
import { useState, useEffect } from 'react';


function App () {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/ralexrivero`
    ).then((response) => response.json())
    .then(setData);
  }, []); // to make only one request
  if (data)
    return (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    );

  return (
    <div className='App'>
      <h1>Data</h1>
    </div>
  );
}

export default App;

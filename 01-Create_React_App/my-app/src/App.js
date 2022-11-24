import './App.css';
import { useState } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Current emotion in {emotion}</h1>
        <button onClick={() => setEmotion("sad")}>Sad</button>
        <button onClick={() => setEmotion("excited")}>Excited</button>
      </header>
    </div>
  );
}

export default App;

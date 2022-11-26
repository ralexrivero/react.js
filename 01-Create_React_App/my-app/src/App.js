import './App.css';
import { Link } from 'react-router-dom';

function Home () {
  return (
    <div>
      <nav>
        <Link to='/about'>About</Link>
      </nav>
      <h1>Home page</h1>
    </div>
  );
}

export function About () {
  return (
    <div>
      <h1>About us</h1>
    </div>
  );
}

export function Contact () {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App () {
  return <Home />;
}

import './App.css';
import { Link, Outlet } from 'react-router-dom';

function Home () {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <h1>Home page</h1>
    </div>
  );
}

export function About () {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <h1>About us</h1>
      <Outlet />
    </div>
  );
}

export function History () {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function Contact () {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App () {
  return <Home />;
}

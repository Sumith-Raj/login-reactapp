import { history } from "../History/history";
import { Link } from 'react-router-dom';
import "./Styles/navbar.css"
export const Navbar = () => {
  function handleLogout() {
    localStorage.clear();
    history.push("/login");
  }
  return (
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/product'>Gallery</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  )
} 
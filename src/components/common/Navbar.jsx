import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/userSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          ChatMetrics
          </Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="/about">About</a>
        <a href="/community">Communities</a>
        {!user ? (
          <>
            <a href="/signup">Signup</a>
            <a href="/login">Login</a>
          </>
        ) : (
          <>
            <a href="/dashboard">Dashboard</a>
            <button onClick={handleLogout} className="navbar-logout">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

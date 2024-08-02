import './Header.css';

const Header = ({community}) => {
  return (
    <header className="Header">
      <h1 className='community'>Dashboard</h1>
      <span className='pipe'>|</span>
      <h3 className='community'>{community}</h3>
    </header>
  );
};

export default Header;

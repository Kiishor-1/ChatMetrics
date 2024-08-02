import { Link } from 'react-router-dom';
import './NotFound.css';
import FourOFour from '../../assets/img/404.gif';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="home-link">
          Go Back Home
        </Link>
      </div>
      <div className="not-found-animation">
        <img src={FourOFour} alt="404 Animation" height={200} />
      </div>
    </div>
  );
};

export default NotFound;

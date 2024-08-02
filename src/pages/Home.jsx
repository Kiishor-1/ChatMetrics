// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome Home | Telegram Trends</h1>
//       <Link to="/dashboard">
//         Dashbaord
//       </Link>
//     </div>
//   )
// }


// Home.jsx
import './Home.css'; 
// import Navbar from '../components/common/Navbar';

const Home = () => {
    return (
      <div className="home-container">
        {/* <Navbar /> */}
        <HeroSection />
        <InformationSection />
        <Footer />
      </div>
    );
  };
    
  const HeroSection = () => (
    <section className="hero-section">
      <h1>Welcome to MyWebsite</h1>
      <p>Your gateway to amazing services and information.</p>
      <button className="hero-button">Get Started</button>
    </section>
  );
  
  

const InformationSection = () => (
    <section className="info-section">
      <div className="info-header">
        <h2>Discover What We Offer</h2>
        <p>Explore a range of services and insights to help you achieve your goals.</p>
      </div>
      <div className="info-cards">
        <div className="info-card">
          <div className="info-icon"><i className="fas fa-book-open"></i></div>
          <h3>Quality Content</h3>
          <p>Access well-researched articles and resources that provide valuable insights and knowledge.</p>
        </div>
        <div className="info-card">
          <div className="info-icon"><i className="fas fa-lightbulb"></i></div>
          <h3>Expert Insights</h3>
          <p>Learn from industry experts who share their experiences and advice on various topics.</p>
        </div>
        <div className="info-card">
          <div className="info-icon"><i className="fas fa-users"></i></div>
          <h3>Community Support</h3>
          <p>Join a community of like-minded individuals to collaborate and grow together.</p>
        </div>
      </div>
    </section>
  );
  

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 Telegram Trends | All rights reserved.</p>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Home;


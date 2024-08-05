import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../store/userSlice';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error('Please enter required fields.');
      return;
    }
    try {
      await dispatch(signupUser({ username, password })).unwrap();
      toast.success('Signup successful! Redirecting to login...');
      navigate('/');
    } catch (error) {
      toast.error(error.message || 'Signup failed!');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup}>
        <h2>Signup</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'Signup'}</button>
      </form>
    </div>
  );
};

export default Signup;
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/userSlice';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ username, password })).unwrap();
      toast.success('Login successful!');
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      toast.error(error.message || 'Login failed!');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      </form>
    </div>
  );
};

export default Login;
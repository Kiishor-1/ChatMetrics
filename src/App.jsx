import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import './utils/chartSetup';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import User from './components/Profile/User';
import Home from './pages/Home';
import AdminChat from './pages/AdminChat';
import { Provider } from 'react-redux';
import store from './store';
import CommunityList from './components/CommunityList/CommunityList';
import UserChat from './components/UserChat/UserChat';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/common/Navbar';
import { Toaster } from 'react-hot-toast';
import NotFound from './components/common/NotFound';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/common/ProtectedRoute';
import EditUser from './components/Profile/EditUser';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Toaster />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard communityId={"66ad1946a950635af6140247"} />} />} />
            <Route path="/profile/:id" element={<User />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/admin-chat" element={<ProtectedRoute element={<AdminChat communityId={"66ad1946a950635af6140247"} />} />} />
            <Route path="/community" element={<CommunityList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/communities/:communityId/chat" element={<ProtectedRoute element={<UserChatWrapper />} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

const UserChatWrapper = () => {
  const { user } = useSelector((state) => state.user);

  return <UserChat communityId={"66ad1946a950635af6140247"} userId={user._id} />;
};

export default App;

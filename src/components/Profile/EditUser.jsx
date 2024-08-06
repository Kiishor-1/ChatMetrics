import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditUser.css';
import { useSelector } from 'react-redux';
import { USER_ENDPOINTS } from '../../services/api';
import toast from 'react-hot-toast';

const { GET_USER,UPDATE_USER } = USER_ENDPOINTS;

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const loggedInUser = useSelector((state) => state.user.user);


    useEffect(() => {
        if (!loggedInUser || loggedInUser._id !== id) {
            // Redirect to user's own profile if trying to edit someone else's profile
            toast.error("Please edit your detailes only. Redirecting..")
            navigate(`/profile/${loggedInUser?._id}`);
            return;
          }
      

        // Fetch user data based on userId
        const fetchUserData = async () => {
            try {
                const response = await fetch(GET_USER(id)); // Replace with your API endpoint
                const data = await response.json();
                setUser(data.user);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchUserData();
        }
    }, [id, loggedInUser,navigate]);

    const handleSave = async () => {
        // Save edited user details
        try {
            const response = await fetch(`${UPDATE_USER}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                console.log(response)
                navigate(`/profile/${id}`);
            } else {
                setError('Failed to save changes.');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user data available</div>;

    return (
        <div className="edit-user-container">
            <div className="edit-profile-content">
                <h2>Edit Profile</h2>
                <div className="profile-info">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                </div>
                <div className="profile-bio">
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        id="bio"
                        rows="4"
                        value={user.bio}
                        onChange={(e) => setUser({ ...user, bio: e.target.value })}
                    />
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default EditUser;
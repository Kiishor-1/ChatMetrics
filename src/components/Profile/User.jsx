import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './User.css';
import { USER_ENDPOINTS } from '../../services/api';

const { GET_USER } = USER_ENDPOINTS;
import ProfileContainer from './ProfileContainer';

const User = () => {
    const { id } = useParams(); // Assume userId is passed in the route

    const [user, setUser] = useState(null);
    const [memberData, setMemberData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch user data based on userId
        const fetchUserData = async () => {
            try {
                const response = await fetch(GET_USER(id)); // Replace with your API endpoint
                const data = await response.json();
                // console.log(data);
                setMemberData(data.memberData);
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
    }, [id]);
    //   console.log(user)
    console.log(memberData)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user data available</div>;

    const {lastActive } = user;
    const isoDate = lastActive;
    const lastActiveDate = new Date(isoDate).toLocaleString('en-IN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    const memberSince = memberData.joinDate;
    const memberSinceDate = new Date(memberSince).toLocaleString('en-IN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });


    return (
        <div className="ui">
            <div className="first"></div>
            <div className="second"></div>
            <ProfileContainer user={user} lastActiveDate={lastActiveDate} memberSince={memberSinceDate}/>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        bio: PropTypes.string,
        goals: PropTypes.string,
        motivations: PropTypes.string,
        concerns: PropTypes.string,
        age: PropTypes.string,
        education: PropTypes.string,
        location: PropTypes.string,
    }),
};

export default User;
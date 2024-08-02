import { useDispatch, useSelector } from 'react-redux';
import { joinCommunity } from '../../store/communitySlice';
import './CommunityCard.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { COMMUNITY_ENDPOINTS } from '../../services/api';

const { COMMUNITY_MEMBERS } = COMMUNITY_ENDPOINTS;

const CommunityCard = ({ community }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.user);
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(COMMUNITY_MEMBERS(community._id));
        const members = response.data; // Ensure this is an array
        if (Array.isArray(members)) {
          const member = members.find((member) => member.userId === user?._id);
          setIsMember(!!member);
        } else {
          console.error('Unexpected response format:', members);
        }
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    if (user) {
      fetchMembers();
    }
  }, [community._id, user]);

  const handleButtonClick = () => {
    if (!token) {
      toast.error("Please login to join the community");
      return;
    }

    if (isMember) {
      navigate(`/communities/${community._id}/chat`);
    } else {
      dispatch(joinCommunity({ communityId: community._id, token }));
    }
  };

  return (
    <div className="community-card">
      <img
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(community.name)}`}
        alt={community.name}
        className="community-image"
        style={{ borderRadius: '50%', height: '6rem', width: '6rem' }}
      />
      <div className="community-info">
        <h3 className="community-name">{community.name}</h3>
        <p className="community-description">{community.description}</p>
        <button className="community-join-button" onClick={handleButtonClick}>
          {isMember ? 'Go to community' : 'Join Community'}
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;

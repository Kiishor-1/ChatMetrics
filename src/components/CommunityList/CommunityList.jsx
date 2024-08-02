import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommunities } from '../../store/communitySlice';
import CommunityCard from './CommunityCard';

const CommunityList = () => {
  const dispatch = useDispatch();
  const { list: communities, status, error } = useSelector((state) => state.community);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCommunities());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>{error}</div>;

  return (
    <div style={{"padding":"20px"}}>
      <h2>Communities</h2>
      <div style={{"display":"flex","flexWrap":"wrap","alignItems":"center"}}>
        {communities.map((community) => (
          <CommunityCard key={community._id} community={community} />
        ))}
      </div>
    </div>
  );
};

export default CommunityList;
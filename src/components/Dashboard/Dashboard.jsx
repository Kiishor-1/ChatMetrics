import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommunityMetrics } from '../../store/communitySlice';
import MemberChart from '../Charts/MemberChart';
import GrowthChart from '../Charts/GrowthChart';
import EngagementChart from '../Charts/EngagementChart';
import TopContributorsChart from '../Charts/TopContributorsChart';
import ActiveInactiveChart from '../Charts/ActiveInactiveMembersChart';
import './Dashboard.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Dashboard = ({ communityId }) => {
  const dispatch = useDispatch();
  const communityData = useSelector((state) => state.community.metrics[communityId]);
  const loading = useSelector((state) => state.community.status === 'loading');
  const error = useSelector((state) => state.community.error);

  useEffect(() => {
    if (communityId) {
      dispatch(fetchCommunityMetrics(communityId));
    }
  }, [dispatch, communityId]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <Header community={communityData?.name || 'Community'} />
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Community Metrics</h2>
          <Link to="/admin-chat" className="community-link">
            Go to Community
          </Link>
        </div>
        <div className="charts-container">
          <MemberChart totalMembers={communityData?.totalMembers || 0} />
          <GrowthChart growthRate={communityData?.growthRate || []} />
          <EngagementChart engagementRate={communityData?.engagementRate || []} />
          <TopContributorsChart topContributors={communityData?.topContributors || []} />
          <ActiveInactiveChart 
            activeMembers={communityData?.activeMembers || 0} 
            inactiveMembers={communityData?.inactiveMembers || 0} 
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
import ProfileSidebar from './ProfileSidebar';
import ProfileContent from './ProfileContent';
import './ProfileContainer.css';

function ProfileContainer({user, lastActiveDate,memberSince}) {
  return (
    <div className="profile-container">
      <ProfileSidebar lastActiveDate={lastActiveDate} user={user}/>
      <ProfileContent memberSince={memberSince}  user={user}/>
    </div>
  );
}

export default ProfileContainer;

import './ProfileContent.css';

function ProfileContent({ user,memberSince }) {
  return (
    <div className="profile-content">
      <h2>Public Profile</h2>
      <div className="profile-info">
        <label htmlFor="name">Username:</label>
        <input type="text" id="name" value={user.username} readOnly />
      </div>
      <div className="profile-bio">
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" rows="4" value={user.bio || "the user of ChatMetrics"} readOnly />
      </div>
      <div className="">
        <p> <strong>Member Since </strong><small>{memberSince}</small></p>
      </div>
    </div>
  );
}

export default ProfileContent;

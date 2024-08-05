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
        <textarea id="bio" rows="4" value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime odio repellat mollitia expedita! Atque soluta nostrum pariatur magni voluptatibus repellat,aperiam vitae vel, saepe dolorem ab, earum facere! Quod, unde." readOnly />
      </div>
      <div className="">
        <p> <strong>Member Since </strong><small>{memberSince}</small></p>
      </div>
    </div>
  );
}

export default ProfileContent;

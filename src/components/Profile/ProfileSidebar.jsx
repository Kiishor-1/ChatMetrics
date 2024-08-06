import { Link } from 'react-router-dom';
import './ProfileSidebar.css';

function ProfileSidebar({ user, lastActiveDate }) {
  return (
    <div className="profile-sidebar">
      <img
        className="profile-avatar"
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.username)}`}
        alt={`${user.username}'s profile`}
      />
      <Link style={{"textDecoration":"none"}} to={`/edit-user/${user._id}`} className="edit-profile-button">Edit Profile</Link>
      <div style={{ fontSize: "0.8rem", fontWeight: 'bold' }}>
        <p>Last Active</p>
        <p>{lastActiveDate}</p>
      </div>
    </div>
  );
}

export default ProfileSidebar;











// import './ProfileSidebar.css';

// function ProfileSidebar({ user ,lastActiveDate}) {
//   return (
//     <div className="profile-sidebar">
//       <img
//         className="profile-avatar"
//         src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.username)}`}
//         alt={`${user.username}'s profile`}
//       />
//       <button className="edit-profile-button">Edit Profile</button>
//       <div style={{"fontSize":"0.8rem","fontWeight":'bold'}}>
//         <p>Last Active</p>
//         <p>{lastActiveDate}</p>
//       </div>
      
//     </div>
//   );
// }

// export default ProfileSidebar;

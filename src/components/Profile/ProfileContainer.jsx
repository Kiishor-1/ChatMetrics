// // ProfileContent.jsx
// import './ProfileContent.css';

// function ProfileContent({ user, handleInputChange, editable = false, defaultBio = '' }) {
//   return (
//     <div className="profile-content">
//       <h2>{editable ? 'Edit Profile' : 'Public Profile'}</h2>
//       <div className="profile-info">
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={user.username}
//           onChange={handleInputChange}
//           readOnly={!editable}
//         />
//       </div>
//       <div className="profile-bio">
//         <label htmlFor="bio">Bio:</label>
//         <textarea
//           id="bio"
//           name="bio"
//           rows="4"
//           value={editable ? user.bio : defaultBio}
//           onChange={handleInputChange}
//           readOnly={!editable}
//         />
//       </div>
//       {user.memberSince && (
//         <div>
//           <p>
//             <strong>Member Since </strong>
//             <small>{user.memberSince}</small>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfileContent;










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

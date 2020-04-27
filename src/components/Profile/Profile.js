import React from "react";
import user from '../Profile/user.json';

// console.log(user);
const styles = {width: 200}

export const Profile = () => {
  return (
  <>
  <div className="profile">
  <div className="description">
    <img
    style={styles}
      src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
      alt="user avatar"
      className="avatar"
    />
    <p className="name">{user.name}</p>
  <p className="tag">{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>
  </>
  );
}


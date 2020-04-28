import React from "react";
import PropTypes from "prop-types";
import styles from "./profile.module.css";

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <>
      <div className={styles.profileContainer}>
        <div className="description">
          <img
            src={avatar}
            alt="user avatar"
            className={styles.imageContainer}
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>{`@${tag}`}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.profileList}>
          <li className={styles.profileListItem}>
            <span className={styles.profileData}>Followers</span>
            <span className={styles.profileNumbers}>{stats.followers}</span>
          </li>
          <li className={styles.profileListItem}>
            <span className={styles.profileData}>Views</span>
            <span className={styles.profileNumbers}>{stats.views}</span>
          </li>
          <li className={styles.profileListItem}>
            <span className={styles.profileData}>Likes</span>
            <span className={styles.profileNumbers}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.defaultProps = {
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMUo6atjJpnQlDCBp-HKEKEs1Y_CIJE1bE7JMQg18IReqKA8ee&usqp=CAU"
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.object
};

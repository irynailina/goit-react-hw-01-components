import React from "react";
import PropTypes from "prop-types";
import styles from "./friendList.module.css";

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.online : styles.status}>{isOnline}</span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  friend: PropTypes.shape({
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMUo6atjJpnQlDCBp-HKEKEs1Y_CIJE1bE7JMQg18IReqKA8ee&usqp=CAU"
  })
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool,
    name: PropTypes.string.isRequired
  })
};

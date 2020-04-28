import React from "react";
import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import styles from "./friendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={styles.friendList}>
        {friends.map(friend => {
          console.log(friend.isOnline);
          return <FriendListItem key={friend.id} friend={friend} />;
        })}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object)
};

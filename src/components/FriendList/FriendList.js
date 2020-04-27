import React from "react";

export const FriendList = ({friends}) => {
  return (
    <>
      <ul className="friend-list">
        {friends.map(friend => {
          return (
            <li className="item" key={friend.id}>
              <span className="status">{friend.isOnline}</span>
              <img className="avatar" src={friend.avatar} alt="" width="48" />
              <p className="name">{friend.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';
const FriendList = ({ friendsData }) => (
    <section className="section">
      <h2 className={s.title}>Friends</h2>
      <ul className={s.friends__list}>
        {friendsData.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </section>
  );
  
  FriendList.propTypes = {
    friendsData: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };
  
  export default FriendList;
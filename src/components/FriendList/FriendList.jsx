import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      <>
        {friends.map(friend => (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </>
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;

import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      <>
        {friends.map(friend => (
          <li key={friend.id} className="item">
            <FriendsListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </>
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })),
};

export default FriendList;

import PropTypes from 'prop-types';


function FriendsListItem({avatar, name, isOnline}) {
  return (
    <li className="item">
      <span className={isOnline ? 'status-g' : 'status-r'}>
        {isOnline ? 'status-g' : 'status-r'}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}

export default FriendsListItem;

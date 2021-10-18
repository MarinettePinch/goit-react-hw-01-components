import PropTypes from 'prop-types';


function FriendsListItem({avatar, name, isOnline}) {
  return (
    <>
      <span className={isOnline ? 'status-g' : 'status-r'}>
        {isOnline ? 'status-g' : 'status-r'}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}

export default FriendsListItem;

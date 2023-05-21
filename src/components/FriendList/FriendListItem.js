import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      {isOnline ? <span className={css.isOnline}></span> : <span className={css.isOffline}></span>}
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired
}
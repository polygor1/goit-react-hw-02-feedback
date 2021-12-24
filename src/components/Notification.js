import PropTypes from 'prop-types';

export default function Notification({ mesage }) {
  return <h3>{mesage}</h3>;
}

Notification.propTypes = {
  mesage: PropTypes.string,
};

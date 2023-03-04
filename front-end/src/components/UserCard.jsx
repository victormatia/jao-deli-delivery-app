import PropTypes from 'prop-types';

function UserCard({ name, url, dataTestId }) {
  return (
    <section>
      <span data-testid={ dataTestId }>{ name }</span>
      <img src={ url } alt="user icon" width="30px" />
    </section>
  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
}.isRequired;

export default UserCard;

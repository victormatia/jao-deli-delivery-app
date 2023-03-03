import PropTypes from 'prop-types';

function ErrorMessage({ message, dataTestId }) {
  return (
    <span data-testid={ dataTestId }>{message}</span>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  dataTestId: PropTypes.string,
}.isRequired;

export default ErrorMessage;

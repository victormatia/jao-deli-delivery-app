import PropTypes from 'prop-types';

function GenericButton({ title, isDisabled, onClick, dataTestId }) {
  return (
    <button
      disabled={ isDisabled }
      type="submit"
      onClick={ onClick }
      data-testid={ dataTestId }
    >
      { title }
    </button>
  );
}

GenericButton.propTypes = {
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
}.isRequired;

export default GenericButton;

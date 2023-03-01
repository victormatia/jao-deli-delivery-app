import PropTypes from 'prop-types';

function GenericButton({ title, isDisabled }) {
  const onclick = () => {
    setInputsValue({
      name: { value: '', isValid: false },
      email: { value: '', isValid: false },
      pass: { value: '', isValid: false },
    });
  };

  return (
    <button
      disabled={ isDisabled }
      type="submit"
      onClick={ onclick }
    >
      { title }
    </button>
  );
}

GenericButton.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default GenericButton;

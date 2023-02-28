import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { formContext } from '../context/FormProvider';

function GenericButton({ title }) {
  const { inputsValue: {
    name, email, pass,
  }, setInputsValue } = useContext(formContext);

  const onclick = () => {
    setInputsValue({
      name: { value: '', isValid: false },
      email: { value: '', isValid: false },
      pass: { value: '', isValid: false },
    });
  };

  return (
    <button
      disabled={ !(name.isValid && email.isValid && pass.isValid) }
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

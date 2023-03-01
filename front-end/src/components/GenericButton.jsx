import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { formContext } from '../context/FormProvider';

function GenericButton({ title }) {
  const { inputsValue: {
    name, email, pass,
  }, setInputsValue } = useContext(formContext);

  const onclick = async () => {
    try {
      const request = await axios.post('http://localhost:3001/register', {
        name: name.value, email: email.value, password: pass.value,
      });

      console.log(request);

      setInputsValue({
        name: { value: '', isValid: false },
        email: { value: '', isValid: false },
        pass: { value: '', isValid: false },
      });
    } catch (e) {
      console.log(e.message);
    }
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

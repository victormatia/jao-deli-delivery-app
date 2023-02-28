import { useContext } from 'react';
import PropTypes from 'prop-types';
import { formContext } from '../context/FormProvider';

function GenericInput({ name, type, validation, keyAcess }) {
  const { inputsValue, setInputsValue } = useContext(formContext);

  const showMessage = () => {
    const { value } = inputsValue[keyAcess];
    if (value?.length) {
      return inputsValue[keyAcess].isValid ? 'Campo válido'
        : 'Campo inválido';
    }
  };

  const onInputChange = (value) => {
    setInputsValue((prevState) => (
      {
        ...prevState,
        [keyAcess]: {
          ...prevState[keyAcess], value,
        },
      }
    ));
  };

  return (
    <section>
      <label htmlFor="genericInput">
        { name }
        <input
          type={ type }
          value={ inputsValue[keyAcess].value }
          onChange={ ({ target }) => {
            validation(target.value, setInputsValue);
            onInputChange(target.value);
          } }
        />
      </label>
      <span>{ showMessage() }</span>
    </section>
  );
}

GenericInput.propTypes = {
  name: PropTypes.string,
  key: PropTypes.string,
  type: PropTypes.string,
  validation: PropTypes.func,
}.isRequired;

export default GenericInput;

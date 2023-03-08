import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import GenericButton from '../components/GenericButton';
import GenericInput from '../components/GenericInput';
import { formContext } from '../context/FormProvider';
import {
  validateEmailInput,
  validateNameInput,
  validatePassInput,
} from '../utils/inputsVaidations';

function Resgister() {
  const [errorMessage, setErrorMessage] = useState('');
  const navidateTo = useNavigate();
  const { inputsValue: {
    name, email, pass,
  }, setInputsValue, setUser } = useContext(formContext);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const postEndPointRegister = async () => {
    axios.post('http://localhost:3001/register', {
      name: name.value, email: email.value, password: pass.value,
    }).then(({ data }) => {
      setUser(data.result);

      setInputsValue({
        name: { value: '', isValid: false },
        email: { value: '', isValid: false },
        pass: { value: '', isValid: false },
      });

      navidateTo('/customer/products');
    }).catch(({ response: { data: { message } } }) => setErrorMessage(message));
  };

  useEffect(() => {
    // OBS.: Os inputs de login e registro usam o mesmo estado, seria interessante refatorar?
    setInputsValue({
      name: { value: '', isValid: false },
      email: { value: '', isValid: false },
      pass: { value: '', isValid: false },
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <form onSubmit={ onSubmit }>
        <GenericInput
          name="Nome"
          keyAccess="name"
          type="text"
          validation={ validateNameInput }
          dataTestId="common_register__input-name"
        />
        <GenericInput
          name="Email"
          keyAccess="email"
          type="email"
          validation={ validateEmailInput }
          dataTestId="common_register__input-email"
        />
        <GenericInput
          name="Senha"
          keyAccess="pass"
          type="password"
          validation={ validatePassInput }
          dataTestId="common_register__input-password"
        />
        <GenericButton
          title="Cadastrar"
          isDisabled={ !(name.isValid && email.isValid && pass.isValid) }
          onClick={ postEndPointRegister }
          dataTestId="common_register__button-register"
        />
      </form>
      <ErrorMessage
        message={ errorMessage }
        dataTestId="common_register__element-invalid_register"
      />
    </section>
  );
}

export default Resgister;

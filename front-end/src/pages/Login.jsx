import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GenericButton from '../components/GenericButton';
import GenericInput from '../components/GenericInput';
import {
  validateEmailInput,
  validatePassInput,
} from '../utils/inputsVaidations';

import { formContext } from '../context/FormProvider';

function Login() {
  const navidateTo = useNavigate();
  const { inputsValue: {
    email, pass,
  } } = useContext(formContext);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const postEndPointLogin = async () => {
    try {
      const request = await axios.post('http://localhost:3001/login', {
        email: email.value, password: pass.value,
      });

      console.log(request.data);
      navidateTo('/customer/products');
    } catch (e) {
      console.log(e.message);
    }
  };

  const redirectToResgister = () => {
    navidateTo('/register');
  };

  return (
    <form onSubmit={ onSubmit }>
      <GenericInput
        name="Email"
        keyAccess="email"
        type="email"
        validation={ validateEmailInput }
        dataTestId="common_login__input-email"
      />
      <GenericInput
        name="Senha"
        keyAccess="pass"
        type="password"
        validation={ validatePassInput }
        dataTestId="common_login__input-password"
      />

      <GenericButton
        title="Login"
        isDisabled={ !(email.isValid && pass.isValid) }
        onClick={ postEndPointLogin }
        dataTestId="common_login__button-login"
      />

      <GenericButton
        title="Ainda não tenho conta"
        isDisabled={ false }
        onClick={ redirectToResgister }
        dataTestId="common_login__button-register"
      />

    </form>
  );
}

export default Login;

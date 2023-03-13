import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GenericButton from '../components/GenericButton';
import GenericInput from '../components/GenericInput';
import {
  validateEmailInput,
  validatePassInput,
} from '../utils/inputsVaidations';

import { formContext } from '../context/FormProvider';
import ErrorMessage from '../components/ErrorMessage';

function Login() {
  const navidateTo = useNavigate();
  const { inputsValue: { email, pass }, setUser } = useContext(formContext);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const postEndPointLogin = async () => {
    axios.post('http://localhost:3001/login', {
      email: email.value, password: pass.value,
    }).then(({ data }) => {
      localStorage.setItem('user', JSON.stringify(data.result));
      setUser(data.result);
      switch (data.result.role) {
      case 'administrator': navidateTo('/admin/manage'); break;
      case 'seller': navidateTo('/seller/orders'); break;
      default: navidateTo('/customer/products'); break;
      }
    }).catch(({ response: { data: { message } } }) => setErrorMessage(message));
  };

  const redirectToResgister = () => {
    navidateTo('/register');
  };

  return (
    <section>
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
      <ErrorMessage
        message={ errorMessage }
        dataTestId="common_login__element-invalid-email"
      />
    </section>
  );
}

export default Login;

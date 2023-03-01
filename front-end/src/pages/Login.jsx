import { useContext } from 'react';
import GenericButton from '../components/GenericButton';
import GenericInput from '../components/GenericInput';
import {
  validateEmailInput,
  validatePassInput,
} from '../utils/inputsVaidations';

import { formContext } from '../context/FormProvider';

function Login() {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const { inputsValue: {
    email, pass,
  } } = useContext(formContext);

  return (
    <form onSubmit={ onSubmit }>
      <GenericInput
        name="Email"
        keyAcess="email"
        type="email"
        validation={ validateEmailInput }
        data-testid="common_login__input-email"
      />
      <GenericInput
        name="Senha"
        keyAcess="pass"
        type="password"
        validation={ validatePassInput }
        data-testid="common_login__input-password
        "
      />

      <GenericButton
        title="Login"
        isDisabled={ !(email.isValid && pass.isValid) }
        data-testid="common_login__button-login"
      />

      <GenericButton
        title="Ainda não tenho conta
        in"
        isDisabled={ false }
        data-testid="common_login__button-register"
      />

    </form>
  );
}

export default Login;

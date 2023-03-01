import GenericButton from '../components/GenericButton';
import GenericInput from '../components/GenericInput';
import {
  validateEmailInput,
  validateNameInput,
  validatePassInput,
} from '../utils/inputsVaidations';

function Resgister() {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={ onSubmit }>
      <GenericInput
        name="Nome"
        keyAccess="name"
        type="text"
        validation={ validateNameInput }
        data-testid="common_register__input-name"
      />
      <GenericInput
        name="Email"
        keyAccess="email"
        type="email"
        validation={ validateEmailInput }
        data-testid="common_register__input-email"
      />
      <GenericInput
        name="Senha"
        keyAccess="pass"
        type="password"
        validation={ validatePassInput }
        data-testid="common_register__input-password"
      />
      <GenericButton
        title="Cadastrar"
        data-testid="common_register__button-register"
      />
    </form>
  );
}

export default Resgister;

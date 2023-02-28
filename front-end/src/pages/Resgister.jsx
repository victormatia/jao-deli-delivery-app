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
        keyAcess="name"
        type="text"
        validation={ validateNameInput }
      />
      <GenericInput
        name="Email"
        keyAcess="email"
        type="email"
        validation={ validateEmailInput }
      />
      <GenericInput
        name="Senha"
        keyAcess="pass"
        type="password"
        validation={ validatePassInput }
      />
      <GenericButton
        title="Cadastrar"
      />
    </form>
  );
}

export default Resgister;

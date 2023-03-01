import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericButton from '../components/GenericButton';
import GenericInput from '../components/GenericInput';
import { formContext } from '../context/FormProvider';
import {
  validateEmailInput,
  validateNameInput,
  validatePassInput,
} from '../utils/inputsVaidations';

function Resgister() {
  const navidateTo = useNavigate();
  const { inputsValue: {
    name, email, pass,
  }, setInputsValue } = useContext(formContext);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onClick = async () => {
    try {
      const request = await axios.post('http://localhost:3001/register', {
        name: name.value, email: email.value, password: pass.value,
      });

      console.log(request.data);

      setInputsValue({
        name: { value: '', isValid: false },
        email: { value: '', isValid: false },
        pass: { value: '', isValid: false },
      });

      navidateTo('/customer/products');
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    setInputsValue({
      name: { value: '', isValid: false },
      email: { value: '', isValid: false },
      pass: { value: '', isValid: false },
    });
  }, []);

  return (
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
        onClick={ onClick }
        dataTestId="common_register__button-register"
      />
    </form>
  );
}

export default Resgister;

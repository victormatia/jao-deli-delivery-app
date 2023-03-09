import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import GenericButton from '../components/GenericButton';
import GenericInput from '../components/GenericInput';
import { formContext } from '../context/FormProvider';
import useLocalStorage from '../hooks/useLocalStorage';
import {
  validateEmailInput,
  validateNameInput,
  validatePassInput,
} from '../utils/inputsVaidations';

function Admin() {
  const [errorMessage, setErrorMessage] = useState('');
  const [roleValue, setRoleValue] = useState('seller');
  const { inputsValue: {
    name, email, pass,
  }, setInputsValue, setUser } = useContext(formContext);
  const { token } = useLocalStorage('user');

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const setSelectRole = ({ target: { value } }) => {
    setRoleValue(value);
  };

  const postEndPointRegister = async () => {
    axios.post('http://localhost:3001/register', {
      name: name.value, email: email.value, password: pass.value, role: roleValue,
    }, { headers: { Authorization: token } }).then(({ data }) => {
      setUser(data.result);

      setInputsValue({
        name: { value: '', isValid: false },
        email: { value: '', isValid: false },
        pass: { value: '', isValid: false },
      });
      setRoleValue('seller');
      setErrorMessage('');
    }).catch(({ response: { data: { message } } }) => setErrorMessage(message));
  };

  useEffect(() => {
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
          dataTestId="admin_manage__input-name"
        />
        <GenericInput
          name="Email"
          keyAccess="email"
          type="email"
          validation={ validateEmailInput }
          dataTestId="admin_manage__input-email"
        />
        <GenericInput
          name="Senha"
          keyAccess="pass"
          type="password"
          validation={ validatePassInput }
          dataTestId="admin_manage__input-password"
        />
        <label htmlFor="role">
          Tipo:
          <select
            value={ roleValue }
            onChange={ setSelectRole }
            data-testid="admin_manage__select-role"
          >
            <option value="customer">Consumidor</option>
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <GenericButton
          title="Cadastrar"
          isDisabled={ !(name.isValid && email.isValid && pass.isValid) }
          onClick={ postEndPointRegister }
          dataTestId="admin_manage__button-register"
        />
      </form>
      <ErrorMessage
        message={ errorMessage }
        dataTestId="admin_manage__element-invalid-register"
      />
    </section>
  );
}

export default Admin;

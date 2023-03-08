import PropTypes from 'prop-types';
import { createContext, useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const formContext = createContext();

function FormProvider({ children }) {
  const [user, setUser] = useState(null);
  const [inputsValue, setInputsValue] = useState({
    name: { value: '', isValid: false },
    email: { value: '', isValid: false },
    pass: { value: '', isValid: false },
  });

  useLocalStorage('user', user);

  const state = useMemo(() => ({
    inputsValue,
    setInputsValue,
    user,
    setUser,
  }), [inputsValue, user]);

  return (
    <formContext.Provider value={ state }>
      {children}
    </formContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.shape,
}.isRequired;

export default FormProvider;
export { formContext };

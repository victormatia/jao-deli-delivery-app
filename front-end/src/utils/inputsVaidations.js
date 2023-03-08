const validateNameInput = (name, setter) => {
  const DOZE = 12;
  const isValid = name.length >= DOZE;
  setter((prevState) => (
    { ...prevState, name: { ...prevState.name, isValid } }));
};

const validatePassInput = (pass, setter) => {
  const SEIS = 6;
  const isValid = pass.length >= SEIS;
  setter((prevState) => (
    { ...prevState, pass: { ...prevState.pass, isValid } }));
};

const validateEmailInput = (email, setter) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const isValid = emailRegex.test(email);
  setter((prevState) => (
    { ...prevState, email: { ...prevState.email, isValid } }));
};

export { validateNameInput, validateEmailInput, validatePassInput };

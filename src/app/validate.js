export function validationInputsRegister({
  email,
  password,
  repeatPassword,
  isLoginMode,
  setIsValidData,
  setIsValidPasswords,
  setIsLoginMode,
}) {
  if (!email || !password || !repeatPassword) {
    setIsValidData(true);
    setIsValidPasswords(false);
  } else if (password !== repeatPassword) {
    setIsValidPasswords(true);
    setIsValidData(false);
  } else {
    setIsLoginMode(!isLoginMode);
    setIsValidPasswords(false);
    setIsValidData(false);
  }
}

export function validationInputsLogin({
  email,
  password,
  isLoginMode,
  setIsValidData,
  setIsLoginMode,
}) {
  if (!email || !password) {
    setIsValidData(true);
  } else {
    setIsLoginMode(!isLoginMode);
  }
}

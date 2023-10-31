export function validationInputsRegister({
  email,
  password,
  username,
  repeatPassword,
  isLoginMode,
  setIsValidData,
  setIsValidPasswords,
  setIsLoginMode,
}) {
  if (!email || !password || !repeatPassword || !username) {
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
  username,
  isLoginMode,
  setIsValidData,
  setIsLoginMode,
}) {
  if (!email || !password || !username) {
    setIsValidData(true);
  } else {
    setIsLoginMode(!isLoginMode);
  }
}

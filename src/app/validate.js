export function validationInputsRegister({
  email,
  password,
  username,
  repeatPassword,
  setIsValidData,
  setIsValidPasswords,
}) {
  if (!email || !password || !repeatPassword || !username) {
    setIsValidData(true);
    setIsValidPasswords(false);
  } else if (password !== repeatPassword) {
    setIsValidPasswords(true);
    setIsValidData(false);
  } else {
    setIsValidPasswords(false);
    setIsValidData(false);
  }
}

export function validationInputsLogin({
  email,
  password,
  username,
  setIsValidData,
}) {
  if (!email || !password || !username) {
    setIsValidData(true);
  } else {
    setIsValidData(false);
  }
}

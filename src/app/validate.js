export function validationInputsRegister({
  email,
  password,
  username,
  repeatPassword,
  setIsValidData,
  setIsValidPasswords,
  setIsFiledOut,
}) {
  if (!email || !password || !repeatPassword || !username) {
    setIsValidData(true);
    setIsValidPasswords(false);
    setIsFiledOut(false);
  } else if (password !== repeatPassword) {
    setIsValidPasswords(true);
    setIsValidData(false);
    setIsFiledOut(false);
  } else {
    setIsFiledOut(true);
    setIsValidPasswords(false);
    setIsValidData(false);
  }
}

export function validationInputsLogin({
  email,
  password,
  username,
  setIsFiledOut,
  setIsValidData,
}) {
  if (!email || !password || !username) {
    setIsValidData(true);
    setIsFiledOut(false);
  } else {
    setIsValidData(false);
    setIsFiledOut(true);
  }
}

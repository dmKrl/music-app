import { useContext, useState } from 'react';
import * as S from '../../components/SignUp-In/SignComponent.styles';
import {
  validationInputsLogin,
  validationInputsRegister,
} from '../../app/validate';
import { postRegister } from '../../api/api';
import MessageError from '../../components/UI/MessageError';
import UserData from '../../context/UserData';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [messageErrorAPI, setMessageErrorAPI] = useState('');
  const [isFilledOut, setIsFiledOut] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isValidData, setIsValidData] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isGettingData, setIsGettingData] = useState(false);
  const [isValidPasswords, setIsValidPasswords] = useState(false);
  const { changeUserInfo } = useContext(UserData);

  const returnsErrorMessageAPI = (data) => {
    if (data.username) {
      setMessageErrorAPI(data.username.join());
    } else if (data.email) {
      setMessageErrorAPI(data.email.join());
    } else {
      setMessageErrorAPI(data.password[0]);
    }
  };

  const registrationUser = (event) => {
    event.preventDefault();
    validationInputsRegister({
      email,
      password,
      username,
      repeatPassword,
      setIsValidData,
      setIsValidPasswords,
      setIsFiledOut,
    });
    if (isFilledOut) {
      setIsGettingData(true);
      postRegister({ email, password, username })
        .then((data) => {
          console.log(data)
          if (data.response.status === 400 && data.response) {
            returnsErrorMessageAPI(data.responseData);
            setIsError(true);
          }
          return changeUserInfo(
            localStorage.setItem('userInfo', data.responseData)
          );
        })
        .finally(() => {
          setIsGettingData(false);
        });
    }
  };
  // const handleLogin = () => {
  //   localStorage.setItem('user', 'user');
  // };

  return (
    <S.Wrapper>
      <S.ContainerSignUp>
        <S.ModalBlock>
          {isLoginMode ? (
            <S.ModalFormLogin>
              <a href="../">
                <S.ModalLogo>
                  <img src="./img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </a>
              <S.ModalLogin
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                name="login"
                placeholder="Почта"
              />
              <S.ModalUsername
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                name="user"
                placeholder="Имя пользователя"
              />
              <S.ModalPassword
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                name="password"
                placeholder="Пароль"
              />
              {isValidData ? (
                <span style={{ color: 'red' }}>Укажите почту/пароль</span>
              ) : (
                ''
              )}
              <S.ModalBtnEnter
                onClick={() => {
                  validationInputsLogin({
                    email,
                    password,
                    repeatPassword,
                    isLoginMode,
                    setIsValidData,
                    setIsLoginMode,
                    setIsValidPasswords,
                  });
                }}
                to="/"
              >
                <span>Войти</span>
              </S.ModalBtnEnter>
              <S.ModaBtnlSignUp
                onClick={(event) => {
                  event.preventDefault();
                  setIsLoginMode(!isLoginMode);
                }}
              >
                Зарегистрироваться
              </S.ModaBtnlSignUp>
            </S.ModalFormLogin>
          ) : (
            <S.ModalFormLogin>
              <a href="../">
                <S.ModalLogo>
                  <img src="../img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </a>
              <S.ModalLogin
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                name="login"
                placeholder="Почта"
              />
              <S.ModalUsername
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                name="user"
                placeholder="Имя пользователя"
              />
              <S.ModalPassword
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalPasswordDouble
                value={repeatPassword}
                onChange={(event) => setRepeatPassword(event.target.value)}
                type="password"
                name="password"
                placeholder="Повторите пароль"
              />
              {isValidData ? (
                <MessageError>Укажите почту/пароль</MessageError>
              ) : (
                ''
              )}
              {isValidPasswords ? (
                <MessageError>Пароли не совпадают</MessageError>
              ) : (
                ''
              )}
              {isError && isFilledOut ? <MessageError>{messageErrorAPI}</MessageError> : ''}
              <S.ModalBtnSignUpEnt
                onClick={registrationUser}
                disabled={isGettingData}
              >
                {isGettingData ? (
                  <span>Загрузка...</span>
                ) : (
                  <span>Зарегистрироваться</span>
                )}
              </S.ModalBtnSignUpEnt>
              <S.ModaBtnlSignUp
                style={{ marginTop: '20px' }}
                onClick={(event) => {
                  event.preventDefault();
                  setIsLoginMode(!isLoginMode);
                }}
              >
                Войти
              </S.ModaBtnlSignUp>
            </S.ModalFormLogin>
          )}
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
  );
}

export default SignUp;

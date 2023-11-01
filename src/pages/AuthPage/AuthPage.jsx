import { useState } from 'react';
import * as S from '../../components/SignUp-In/SignComponent.styles';
import {
  validationInputsLogin,
  validationInputsRegister,
} from '../../app/validate';
import { postRegister } from '../../api/api';
import MessageError from '../../components/UI/MessageError';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isValidData, setIsValidData] = useState(false);
  const [isValidPasswords, setIsValidPasswords] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isGettingData, setIsGettingData] = useState(false);

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
              <S.ModaBtnlSignUp to="/signup">
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
              <S.ModalBtnSignUpEnt
                onClick={(event) => {
                  event.preventDefault();
                  setIsGettingData(true);

                  validationInputsRegister({
                    email,
                    password,
                    username,
                    repeatPassword,
                    setIsValidData,
                    setIsValidPasswords,
                  });
                  postRegister({ email, password, username })
                    .then((data) => {
                      if (data.response.status === 400) {
                        return console.log(data);
                      }
                      return console.log(data);
                    })
                    .catch((error) => {
                      console.log(error);
                    })
                    .finally(() => {
                      setIsGettingData(false);
                    });
                }}
                disabled={isGettingData}
              >
                {isGettingData ? (
                  <span>Загрузка...</span>
                ) : (
                  <span>Зарегистрироваться</span>
                )}
              </S.ModalBtnSignUpEnt>
            </S.ModalFormLogin>
          )}
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
  );
}

export default SignUp;

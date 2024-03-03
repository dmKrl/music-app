import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as S from '../../components/SignUp-In/SignComponent.styles';
import { postRegister, postLogin } from '../../api/api';
import MessageError from '../../components/UI/MessageError/MessageError';
import UserData from '../../context/UserData';
import { getAccessTokenAPI } from '../../services/GetAccessTokenService';
import { setAuth } from '../../redux/slices/authSlice/authSlice';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [messageErrorAPI, setMessageErrorAPI] = useState('');
  const [isError, setIsError] = useState(false);
  const [isValidData, setIsValidData] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isGettingData, setIsGettingData] = useState(false);
  const [isValidPasswords, setIsValidPasswords] = useState(false);
  const { changeUserInfo } = useContext(UserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postAccessToken] = getAccessTokenAPI.usePostAccessTokenMutation();

  const returnsErrorMessageAPI = (data) => {
    if (data.username) {
      setMessageErrorAPI(data.username.join());
    } else if (data.email) {
      setMessageErrorAPI(data.email.join());
    } else if (data.detail) {
      setMessageErrorAPI(data.detail);
    } else {
      setMessageErrorAPI(data.password[0]);
    }
  };

  const responseToken = () => {
    postAccessToken({ email, password })
      .then((response) => {
        dispatch(
          setAuth({
            access: response.data.access,
            refresh: response.data.refresh,
            user: JSON.parse(localStorage.getItem('userDataInfo')),
          }),
        );
        localStorage.setItem('access', response?.access);
        localStorage.setItem('refresh', response?.refresh);
      })
      .catch((error) => console.error(error));
  };

  const loginUser = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setIsValidData(true);
    } else {
      setIsValidData(false);
      setIsGettingData(true);
      postLogin({ email, password })
        .then((data) => {
          console.log(data);
          if (data.id) {
            localStorage.setItem('userDataInfo', JSON.stringify(data));
            changeUserInfo(JSON.parse(localStorage.getItem('userDataInfo')));
            responseToken();
            return navigate('/');
          }
          if (data.detail) {
            returnsErrorMessageAPI(data);
            setIsError(true);
          }
          return data;
        })
        .catch((error) => error)
        .finally(() => {
          setIsGettingData(false);
        });
    }
  };

  const registrationUser = (event) => {
    event.preventDefault();
    if (!email || !password || !repeatPassword || !username) {
      setIsValidData(true);
      setIsValidPasswords(false);
    } else if (password !== repeatPassword) {
      setIsValidPasswords(true);
      setIsValidData(false);
    } else {
      setIsValidPasswords(false);
      setIsValidData(false);
      setIsGettingData(true);
      postRegister({ email, password, username })
        .then((data) => {
          if (data.id) {
            localStorage.setItem('userDataInfo', JSON.stringify(data));
            changeUserInfo(JSON.parse(localStorage.getItem('userDataInfo')));
            responseToken();
            return navigate('/');
          }
          if (data.response && data.response.status === 400) {
            returnsErrorMessageAPI(data.responseData);
            setIsError(true);
          }
          return data;
        })
        .catch((error) => error)
        .finally(() => {
          setIsGettingData(false);
        });
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerSignUp>
        <S.ModalBlock>
          {!isLoginMode ? (
            <S.ModalFormLogin>
              <Link href="/">
                <S.ModalLogo>
                  <img src="./img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </Link>
              <S.ModalLogin
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                name="login"
                placeholder="Почта"
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
              {isError ? <MessageError>{messageErrorAPI}</MessageError> : ''}
              <S.ModalBtnEnter onClick={loginUser} disabled={isGettingData}>
                {isGettingData ? <span>Загрузка...</span> : <span>Войти</span>}
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
              <a href="/">
                <S.ModalLogo>
                  <img src="img/logo_modal.png" alt="logo" />
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
              {isError ? <MessageError>{messageErrorAPI}</MessageError> : ''}
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

/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../api/api';
import * as S from '../../components/SignUp-In/SignComponent.styles';
import MessageError from '../../components/UI/MessageError/MessageError';
import { getAccessTokenAPI } from '../../services/GetAccessTokenService';
import { setAuth } from '../../redux/slices/authSlice/authSlice';
import UserData from '../../context/UserData';
import ValidateError from '../../components/UI/ValidateError/ValidateError';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [messageErrorAPI, setMessageErrorAPI] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isGettingData, setIsGettingData] = useState(false);
  const [isError, setIsError] = useState(false);
  const { changeUserInfo } = useContext(UserData);
  const [postAccessToken] = getAccessTokenAPI.usePostAccessTokenMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

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

  const registrationUser = () => {
    setIsGettingData(true);
    postRegister({ email, password, username })
      .then((dataUser) => {
        setConfirmPassword('');
        if (dataUser.id) {
          localStorage.setItem('userDataInfo', JSON.stringify(dataUser));
          changeUserInfo(JSON.parse(localStorage.getItem('userDataInfo')));
          responseToken();
          return navigate('/');
        }
        if (dataUser.response && dataUser.response.status === 400) {
          returnsErrorMessageAPI(dataUser.responseData);
          setIsError(true);
        }
        return dataUser;
      })
      .catch((error) => error)
      .finally(() => {
        setIsGettingData(false);
      });
  };

  const onSubmit = (data) => {
    if (password !== repeatPassword) {
      return setConfirmPassword('Пароли не совпадают');
    }
    reset();
    return registrationUser(data);
  };

  return (
    <S.Wrapper>
      <S.ContainerSignUp>
        <S.ModalBlock>
          <S.ModalFormLogin onSubmit={handleSubmit(onSubmit)}>
            <a href="/">
              <S.ModalLogo>
                <img src="img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalLogin
              value={email}
              type="text"
              name="login"
              placeholder="Почта"
              {...register('emailReg', {
                required: 'Поле обязательно к заполнению',
                onChange: (event) => setEmail(event.target.value),
              })}
            />
            {errors?.emailReg && (
              <ValidateError errors={errors?.emailReg?.message} />
            )}
            <S.ModalUsername
              value={username}
              type="text"
              name="user"
              placeholder="Имя пользователя"
              {...register('usernameReg', {
                required: 'Поле обязательно к заполнению',
                onChange: (event) => setUsername(event.target.value),
              })}
            />
            {errors?.usernameReg && (
              <ValidateError errors={errors?.usernameReg?.message} />
            )}
            <S.ModalPassword
              value={password}
              type="password"
              name="password"
              placeholder="Пароль"
              {...register('passwordReg', {
                required: 'Поле обязательно к заполнению',
                onChange: (event) => {
                  setPassword(event.target.value);
                },
              })}
            />
            {errors?.passwordReg && (
              <ValidateError errors={errors?.passwordReg?.message} />
            )}
            <S.ModalPasswordDouble
              value={repeatPassword}
              type="password"
              name="password"
              placeholder="Повторите пароль"
              {...register('rpassword', {
                required: 'Поле обязательно к заполнению',
                onChange: (event) => setRepeatPassword(event.target.value),
              })}
            />
            {errors?.rpassword && (
              <ValidateError errors={errors?.rpassword?.message} />
            )}
            {confirmPassword && <ValidateError errors={confirmPassword} />}
            {isError ? <MessageError>{messageErrorAPI}</MessageError> : ''}
            <S.ModalBtnSignUpEnt type="submit" disabled={isGettingData}>
              {isGettingData ? (
                <span>Загрузка...</span>
              ) : (
                <span>Зарегистрироваться</span>
              )}
            </S.ModalBtnSignUpEnt>
            <S.ModaBtnlSignUp style={{ marginTop: '20px' }} to="/auth">
              Войти
            </S.ModaBtnlSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
  );
}

export default RegisterPage;

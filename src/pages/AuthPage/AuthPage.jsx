/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as S from '../../components/SignUp-In/SignComponent.styles';
import { postLogin } from '../../api/api';
import MessageError from '../../components/UI/MessageError/MessageError';
import UserData from '../../context/UserData';
import { getAccessTokenAPI } from '../../services/GetAccessTokenService';
import { setAuth } from '../../redux/slices/authSlice/authSlice';
import ValidateError from '../../components/UI/ValidateError/ValidateError';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageErrorAPI, setMessageErrorAPI] = useState('');
  const [isError, setIsError] = useState(false);
  const [isGettingData, setIsGettingData] = useState(false);
  const { changeUserInfo } = useContext(UserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postAccessToken] = getAccessTokenAPI.usePostAccessTokenMutation();

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

  const loginUser = ({ emailLogin, passwordLogin }) => {
    setIsGettingData(true);
    postLogin({ email: emailLogin, password: passwordLogin })
      .then((dataUser) => {
        if (dataUser.id) {
          localStorage.setItem('userDataInfo', JSON.stringify(dataUser));
          changeUserInfo(JSON.parse(localStorage.getItem('userDataInfo')));
          responseToken();
          return navigate('/');
        }
        if (dataUser.detail) {
          returnsErrorMessageAPI(dataUser);
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
    reset();
    return loginUser(data);
  };

  return (
    <S.Wrapper>
      <S.ContainerSignUp>
        <S.ModalBlock>
          <S.ModalFormLogin onSubmit={handleSubmit(onSubmit)}>
            <Link href="/">
              <S.ModalLogo>
                <img src="img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </Link>
            <S.ModalLogin
              value={email}
              type="text"
              name="login"
              placeholder="Почта"
              {...register('emailLogin', {
                required: 'Поле обязательно к заполнению',
                onChange: (event) => setEmail(event.target.value),
              })}
            />
            {errors?.emailLogin && (
              <ValidateError errors={errors?.emailLogin?.message} />
            )}
            <S.ModalPassword
              value={password}
              type="password"
              name="password"
              placeholder="Пароль"
              {...register('passwordLogin', {
                required: 'Поле обязательно к заполнению',
                onChange: (event) => setPassword(event.target.value),
              })}
            />
            {errors?.passwordLogin && (
              <ValidateError errors={errors?.passwordLogin?.message} />
            )}
            {isError ? <MessageError>{messageErrorAPI}</MessageError> : ''}
            <S.ModalBtnEnter type="submit" disabled={isGettingData}>
              {isGettingData ? <span>Загрузка...</span> : <span>Войти</span>}
            </S.ModalBtnEnter>
            <S.ModaBtnlSignUp to="/register">
              Зарегистрироваться
            </S.ModaBtnlSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
  );
}

export default SignUp;

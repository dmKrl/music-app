import { useState } from 'react';
import * as S from '../../components/SignUp-In/SignComponent.styles';

function SignUp() {
  const [email, setEmail] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  // const [isGettingData, setIsGettingData] = useState(false);

  const handleLogin = () => {
    localStorage.setItem('user', 'user');
  };
  const changeIsLoginMode = () => setIsLoginMode(!isLoginMode);
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
              <S.ModalLogin type="text" name="login" placeholder="Почта" />
              <S.ModalPassword
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter onClick={handleLogin} to="/">
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
              <S.ModalBtnSignUpEnt
                onClick={changeIsLoginMode} /* disabled={isGettingData} */
              >
                <span>Зарегистрироваться</span>
              </S.ModalBtnSignUpEnt>
            </S.ModalFormLogin>
          )}
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
  );
}

export default SignUp;

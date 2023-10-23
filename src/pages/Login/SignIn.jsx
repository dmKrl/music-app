import * as S from '../../components/SignUp-In/SignComponent.styles';

function SignIn() {
  const handleLogin = () => {
    localStorage.setItem('user', 'user');
  };
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
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
            <S.ModaBtnlSignUp to="/signup">Зарегистрироваться</S.ModaBtnlSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}

export default SignIn;

import * as S from '../../components/SignUp-In/SignComponent.styles';

function SignUp() {
  return (
    <S.Wrapper>
      <S.ContainerSignUp>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <a href="../">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalLogin type="text" name="login" placeholder="Почта" />
            <S.ModalPassword
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalPasswordDouble
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSignUpEnt to="/signin">
              <span>Зарегистрироваться</span>
            </S.ModalBtnSignUpEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
  );
}

export default SignUp;

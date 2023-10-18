import * as S from '../../components/SignUp-In/SignComponent.styles';

function SignUp() {
  return (
    <S.Wrapper className="wrapper">
      <S.ContainerSignUp className="container-signup">
        <S.ModalBlock className="modal__block">
          <S.ModalFormLogin className="modal__form-login">
            <a href="../">
              <S.ModalLogo className="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalLogin
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalPassword
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalPasswordDouble
              className="modal__input password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSignUpEnt
              className="modal__btn-signup-ent"
              type="button"
            >
              <a href="../index.html">Зарегистрироваться</a>
            </S.ModalBtnSignUpEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
  );
}

export default SignUp;

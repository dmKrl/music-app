import * as S from './SignComponent.styles';

function SignIn() {
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
            12
            <S.ModalPassword
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter type="button">
              <a href="./">Войти</a>
            </S.ModalBtnEnter>
            <S.ModaBtnlSignUp type="button">
              <a href="./">Зарегистрироваться</a>
            </S.ModaBtnlSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}

export default SignIn;

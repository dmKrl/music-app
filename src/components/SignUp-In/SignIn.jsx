import './SignIn.css';
import ModalInput from '../UI/ModalInput';

function SignIn() {
  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" action="#">
            <a href="../">
              <div className="modal__logo">
                <img src="./img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <ModalInput
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <ModalInput
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter" type="button">
              <a href="./">Войти</a>
            </button>
            <button className="modal__btn-signup" type="button">
              <a href="./">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

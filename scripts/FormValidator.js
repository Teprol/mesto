class FormValidator {
  constructor(formValid, object) {
    this._object = object;
    this._formValid = formValid;

    this._inputList = Array.from(this._formValid.querySelectorAll(this._object.inputSelector));
    this._button = this._formValid.querySelector(`${this._object.submitButtonSelector}`);
  }

  // отключение кнопки отправки форму
  _disabledSubmitButton = () => {
    this._button.classList.add(`${this._object.inactiveButtonClass}`);
    this._button.disabled = true;
  };

  // включение кнопки отправить форму
  _activeSubmitButton = () => {
    this._button.classList.remove(`${this._object.inactiveButtonClass}`);
    this._button.disabled = false;
  };

  // проверка всех инпутов на валидность
  _checkInputsInvalid = () => {
    return this._inputList.some((input) => !input.validity.valid);
  }

  // включение выключение кнопок в зависимости от валидности всех
  _toggleButton = () => {
    if (this._checkInputsInvalid()) {
      this._disabledSubmitButton(); //выключаем кнопку
    } else {
      this._activeSubmitButton();  //включаем кнопку
    }
  }

  // показать ошибку
  _showInputError = (input) => {
    const inputError = this._formValid.querySelector(`.${input.id}-error`);
    input.classList.add(`${this._object.inputErrorClass}`)
    inputError.classList.add(`${this._object.errorClass}`);
    inputError.textContent = input.validationMessage;
  }

  // скрыть ошибку
  _hideInputError = (input) => {
    const inputError = this._formValid.querySelector(`.${input.id}-error`);
    input.classList.remove(`${this._object.inputErrorClass}`)
    inputError.classList.remove(`${this._object.errorClass}`);
    inputError.textContent = ``;
  }

  // функция проверки инпута на валидность
  _checkInputValid = (input) => {
    // дальше делаем проверку поля если оно валидно, то показываем ошибку и присваеваем текст ошибки спану
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  };

  // очистка ошибок форм
  resetErorr = () => {
    this._toggleButton();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  // делает валидность публичный метод который включает валидацию
  enableValidation = () => {
    //переключатель кнопки
    this._toggleButton();
    //перебор всех инпутов формы
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValid(input); // проверка инпута на валидность
        this._toggleButton();         //переключатель кнопки
      });
    });
  };
}


export default FormValidator;

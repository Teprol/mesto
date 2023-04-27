class FormValidator {
  constructor(formValid, object) {
    this._object = object;
    this._formValid = formValid;
  }

  //* отключение кнопки отправки форму
  _disabledSubmitButton = (button, object) => {
    button.classList.add(`${object.inactiveButtonClass}`);
    button.disabled = true;
  };

  //* включение кнопки отправить форму
  _activeSubmitButton = (button, object) => {
    button.classList.remove(`${object.inactiveButtonClass}`);
    button.disabled = false;
  };

  //* проверка всех инпутов на валидность
  _checkInputsInvalid = (inputs) => {
    return inputs.some((input) => !input.validity.valid);
  }

  //* включение выключение кнопок в зависимости от валидности всех
  _toggleButton = (inputList, button, object) => {
    if (this._checkInputsInvalid(inputList)) {
      //!выключаем кнопку
      this._disabledSubmitButton(button, object);
    } else {
      //! включаем кнопку
      this._activeSubmitButton(button, object);
    }
  }

  //* показать ошибку
  _showInputError = (input, object) => {
    const inputError = document.querySelector(`.${input.id}-error`);
    input.classList.add(`${object.inputErrorClass}`)
    inputError.classList.add(`${object.errorClass}`);
    inputError.textContent = input.validationMessage;
  }

  //* скрыть ошибку
  _hideInputError = (input, object) => {
    const inputError = document.querySelector(`.${input.id}-error`);
    input.classList.remove(`${object.inputErrorClass}`)
    inputError.classList.remove(`${object.errorClass}`);
    inputError.textContent = ``;
  }

  //* функция проверки инпута на валидность
  _checkInputValid = (input, object) => {
    //! дальше делаем проверку поля если оно валидно, то показываем ошибку и присваеваем текст ошибки спану
    if (input.validity.valid) {
      this._hideInputError(input, object);
    } else {
      this._showInputError(input, object);
    }
  };

  //* очистка ошибок форм
  resetErorr = () => {
    const inputList = Array.from(this._formValid.querySelectorAll(this._object.inputSelector));
    const button = this._formValid.querySelector(`${this._object.submitButtonSelector}`);
    this._toggleButton(inputList, button, this._object);
    inputList.forEach((input) => {
      this._hideInputError(input, this._object);
    });
  }

  //* делает валидность
  enableValidation = () => {
    //!публичный метод который включает валидацию
    const inputList = Array.from(this._formValid.querySelectorAll(`${this._object.inputSelector}`));
    const button = this._formValid.querySelector(`${this._object.submitButtonSelector}`);
    //*переключатель кнопки
    this._toggleButton(inputList, button, this._object);

    //*перебор всех инпутов формы
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        //* проверка инпута на валидность
        this._checkInputValid(input, this._object);
        //*переключатель кнопки
        this._toggleButton(inputList, button, this._object);
      });
    });
  };
}


export default FormValidator;

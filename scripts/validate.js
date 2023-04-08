const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//*обход всего документа и поиск всех элементов форм попапа
const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(`${object.formSelector}`));
  formList.forEach((form) => {

    setEventListenerInput(form, object);

  });
};

const setEventListenerInput = (formValid, object) => {
  const inputList = Array.from(formValid.querySelectorAll(`${object.inputSelector}`));
  const button = formValid.querySelector(`${object.submitButtonSelector}`);
  toggleButton(inputList, button, object);

  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValid(input, object);
      toggleButton(inputList, button, object);
    });
  });
};

//* функция проверки инпута на валидность
const checkInputValid = (input, object) => {
  const inputError = document.querySelector(`.${input.id}-error`);
  //! дальше делаем проверку поля если оно валидно, то показываем ошибку и присваеваем текст ошибки спану
  if (input.validity.valid) {
    input.classList.remove(`${object.inputErrorClass}`)
    inputError.classList.remove(`${object.errorClass}`);
    inputError.textContent = ``;
  } else {
    input.classList.add(`${object.inputErrorClass}`)
    inputError.classList.add(`${object.errorClass}`);
    inputError.textContent = input.validationMessage;
  }
};

const resetErorr = (popup) => {
  const inputList = Array.from(popup.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((input) => {
    const inputError = document.querySelector(`.${input.id}-error`);
    input.classList.remove(validationConfig.inputErrorClass);
    inputError.classList.remove(validationConfig.errorClass);
    inputError.textContent = ``;
  });
}

//* проверка всех инпутов на валидность
const checkInputsInvalid = (inputs) => {
  return inputs.some((input) => !input.validity.valid);
}

//! включение выключение кнопок в зависимости от валидности всех
const toggleButton = (inputList, button, object) => {
  if (checkInputsInvalid(inputList)) {
    //!выключаем кнопку
    disabledSubmitButton(button, object);
  } else {
    //! включаем кнопку
    activeSubmitButton(button, object);
  }
}

//* отключение кнопки отправки форму
const disabledSubmitButton = (button, object) => {
  button.classList.add(`${object.inactiveButtonClass}`);
  button.disabled = true;
  // button.setAttribute('disabled', true);
};

//* включение кнопки отправить форму
const activeSubmitButton = (button, object) => {
  button.classList.remove(`${object.inactiveButtonClass}`);
  button.disabled = false;
  // button.removeAttribute('disabled', true);
};


enableValidation(validationConfig);

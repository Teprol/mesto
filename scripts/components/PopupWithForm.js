import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(selector, sabmitFormColback) {
    //? Кроме селектора попапа принимает в конструктор колбэк сабмита формы.

    super(selector);
    this._sabmitFormColback = sabmitFormColback;

    this._form = this._selectorPopup.querySelector('.popup__form');
    this._inputList = Array.from(this._selectorPopup.querySelectorAll(".popup__input"));
  };

  //? в пачке сказали что в брифе опечатка и делать метод публичным
  getInputValues = () => {
    //? собирает данные всех полей формы.

    this._userInputs = {};
    this._inputList.forEach((input) => {
      this._userInputs[input.name] = input.value;
    })
    return this._userInputs;
  };

  setInputValues = (objectUserInfo) => {
    this._inputList.forEach((input) => {
      input.value = objectUserInfo[input.name];
    })
  };

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', this._sabmitFormColback);
  };

  close = () => {
    super.close();
    this._form.reset();
  };
};

export default PopupWithForm;

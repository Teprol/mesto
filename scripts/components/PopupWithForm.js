import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(selector) {
    //? Кроме селектора попапа принимает в конструктор колбэк сабмита формы.

    super(selector);
    // sabmitFormColback
    // this._sabmitFormColback = sabmitFormColback;

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
    console.log(this._userInputs);
    return this._userInputs;
  };

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', this._sabmitFormColback)
  };

  colse = () => {
    super.close();
    this._form.reset();
  };
};

export default PopupWithForm;

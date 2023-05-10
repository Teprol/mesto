import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(selector, sabmitFormColback) {
    //? Кроме селектора попапа принимает в конструктор колбэк сабмита формы.

    super(selector);

    this._sabmitFormColback = sabmitFormColback;

    this._popupForm = document.querySelector(selector);
    this.inputList = this._popupForm
  };

  _getInputValues = () => {
    //? собирает данные всех полей формы.

  };
};

import Popup from "./Popup.js";

class PopupWithSubmit extends Popup {
  constructor(selector, sabmitFormColback) {
    //? Кроме селектора попапа принимает в конструктор колбэк который будет вызываться по кнопке
    super(selector);
    this._sabmitFormColback = sabmitFormColback;
    this._form = this._selectorPopup.querySelector('.popup__form');
  };

  open = (card, cardId) => {
    this._card = card;
    this._cardId = cardId;
    super.open();
  }

  // ожидает отправки формы в колбэк прокинута функция которая отработает по нажатию
  setEventListeners = () => {
    // наследует метод родителя
    super.setEventListeners();
    // по нажатию
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      // функиця отработает по нажатию внутри карточка и айди карточки
      this._sabmitFormColback(this._card, this._cardId);
    });
  };
};

export default PopupWithSubmit;

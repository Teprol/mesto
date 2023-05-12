class Popup {
  constructor(selector) {
    //? единственный параметр — селектор попапа

    this._selectorPopup = document.querySelector(selector);
  }

  open() {
    //? открытие попапа

    this._selectorPopup.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    //? закрытие попапа
    this._selectorPopup.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    //? содержит логику закрытия попапа клавишей Esc.

    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners () {
    //? публичный метод, который добавляет слушатель клика иконке закрытия попапа.
    //? Модальное окно также закрывается при клике на затемнённую область вокруг формы.
    const closeButton = this._selectorPopup.querySelector(".popup__close");

    //?вроде нужно раскидать по отдельным приватным методам для колбэка
    //?но не нашел такое требование

    closeButton.addEventListener('click', () => {
      this.close();
    });

    this._selectorPopup.addEventListener('mousedown', (e) => {
      if (e.target === this._selectorPopup) {
        this.close();
      };
    });

  }
}

export default Popup;

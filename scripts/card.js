import {popupOpenImage, popupImageLink, popupImageTitle, openPopup} from './index.js';

class Card {
  constructor(element, template) {
    this._element = element;
    this._template = document.querySelector(template).content;
    this._card = this._template.querySelector(".elements__item").cloneNode(true);

    this._image = this._card.querySelector(".element__image");
    this._title = this._card.querySelector(".element__title");
    this._like = this._card.querySelector(".element__like");
    this._trash = this._card.querySelector(".element__button-close");
  }

  //заполняет карточку данными из объекта из параметра
  _render() {
    this._image.src = this._element.link;
    this._image.alt = this._element.name;
    this._title.textContent = this._element.name;
  }

  // вешает все слушатели
  _addListeners() {
    // событие лайка
    this._like.addEventListener("click", () => {
      this._like.classList.toggle("element__like_active");
    });

    // событие удаление карточки
    this._trash.addEventListener("click", () => {
      this._card.remove();
    });

    // откытие картинки
    this._image.addEventListener("click", () => {
      openPopup(popupOpenImage);
      popupImageLink.src = this._element.link;
      popupImageLink.alt = this._element.name;
      popupImageTitle.textContent = this._element.name;
    });
  }

  //ввозращает карточку заполненую с навешенными слушателями
  getCard() {
    this._render();
    this._addListeners();

    return this._card;
  }
}

export default Card;

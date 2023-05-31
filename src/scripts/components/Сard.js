// import { popupOpenImage, popupImageLink, popupImageTitle, openPopup } from './index.js';

class Card {
  constructor(element, template, userId, handleCardClick, handleCardDelite) {
    this._element = element;
    this._template = document.querySelector(template).content;
    this._card = this._template.querySelector(".elements__item").cloneNode(true);

    this._image = this._card.querySelector(".element__image");
    this._title = this._card.querySelector(".element__title");
    this._like = this._card.querySelector(".element__like");
    this._likeCounter = this._card.querySelector(".element__like-count");
    this._trash = this._card.querySelector(".element__button-close");

    this._userId = userId;
    this._ownerid = this._element.owner._id;
    this._cardId = this._element._id;

    this._handleCardClick = handleCardClick;
    this._handleCardDelite = handleCardDelite;
  }

  //заполняет карточку данными из объекта из параметра
  _render() {
    this._image.src = this._element.link;
    this._image.alt = this._element.name;
    this._title.textContent = this._element.name;
    this._likeCounter.textContent = this._element.likes.length;

    if (this._userId !== this._ownerid) {
      this._trash.remove();
    }
  }

  // вешает на лайк класс активности
  _handleLikeClick = () => {
    this._like.classList.toggle("element__like_active");
  }

  // удаляет карточку
  _handleTrashClick = () => {
    // this._card.remove();
    //перекинет в функцию 
    this._handleCardDelite(this._card, this._cardId);
  }

  _handleOpenImageClick = () => {
    this._handleCardClick(this._element);
  }


  // вешает все слушатели
  _addListeners() {
    // событие лайка
    this._like.addEventListener("click", this._handleLikeClick);
    // событие удаление карточки
    this._trash.addEventListener("click", this._handleTrashClick);
    // откытие картинки
    this._image.addEventListener("click", this._handleOpenImageClick);
  }

  //ввозращает карточку заполненую с навешенными слушателями
  getCard() {
    // console.error(this._userId);
    // console.log(this._creator);
    this._render();
    this._addListeners();

    return this._card;
  }
}

export default Card;

// import { popupOpenImage, popupImageLink, popupImageTitle, openPopup } from './index.js';

class Card {
  constructor(element, template, userId, handleCardClick, handleCardDelite, addLike, removeLike) {
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
    this._addLike = addLike;
    this._removeLike = removeLike;
  }

  //заполняет карточку данными из объекта из параметра
  _render() {
    this._image.src = this._element.link;
    this._image.alt = this._element.name;
    this._title.textContent = this._element.name;

    // показывает лайки
    this.setLike(this._element);

    if (this._userId !== this._ownerid) {
      this._trash.remove();
    }
  }

  setLike = ({ likes }) => {
    this.likesArr = likes;
    this._likeCounter.textContent = likes.length;

    if (this._isLiked()) {
      this._like.classList.add("element__like_active");
    } else {
      this._like.classList.remove("element__like_active");
    }
  };

  //проверка на наличие лайка
  _isLiked() {
    return this.likesArr.find((userLike) => userLike._id === this._userId)
  }

  // вешает на лайк класс активности
  _handleLikeClick = () => {
    this._isLiked() ? this._removeLike(this._cardId) : this._addLike(this._cardId);
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
    // console.log(this._element);
    this._render();
    this._addListeners();

    return this._card;
  }
}

export default Card;

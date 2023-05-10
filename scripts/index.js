// import Card from './Card.js';
import Card from './Сard.js';
import initialCards from './cards.js';
import FormValidator from './FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';

//? настройки для валидации
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
// переменые
//* попап профиля
const popupProfile = document.querySelector(".popup_profile");
const buttonEditPopup = document.querySelector(".edit-button");
// форма
const formProfileEditing = popupProfile.querySelector(".popup__form");
const popupInputName = popupProfile.querySelector(".popup__input_name");
const popupInputDescription = popupProfile.querySelector(".popup__input_description");
// const submitProfile = popupProfile.querySelector('.popup__save'); // кнопка сохранения профиля
//* профиль
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile-info__name");
const profileDescription = profile.querySelector(".profile-info__description");
//* попап добавления карточки
const popupCard = document.querySelector(".popup_card");
const buttonAddCard = document.querySelector(".profile__add-button");
const formCardSave = popupCard.querySelector(".popup__form");
const cardTitle = popupCard.querySelector(".popup__input_name");
const cardlinkImage = popupCard.querySelector(".popup__input_description");
// const submitCard = popupCard.querySelector('.popup__save'); //кнопка сохранения Карточки
//* попап полной картинки
const popupOpenImage = document.querySelector(".popup_image-open");//! можно будет удалить
const popupImageLink = popupOpenImage.querySelector(".popup__image");//! можно будет удалить
const popupImageTitle = popupOpenImage.querySelector(".popup__image-title");//! можно будет удалить
// список карточек
const listCards = document.querySelector(".elements__list"); //! можно будет удалить
// шаблон карточки
// const cardTemplate = document.querySelector("#cards").content;


const formValidPopupProfile = new FormValidator(popupProfile, validationConfig);
const formValidpopupCard = new FormValidator(popupCard, validationConfig);

//* функция открытия попапа
const openPopup = function (namePopup) {
  namePopup.classList.add("popup_opened");
  document.addEventListener('keydown', closeESC);
};

//* функция закрытия попапа
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeESC);
};

//* закрытие по клавише которое находит единственный на стр элемент и снимает с него класс опена
const closeESC = (evt) => {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
};

//* закрытие при клике мимо попапа
const clickNoEverley = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popup) => {
    popup.addEventListener('mousedown', (e) => {
      if (e.target === popup) {
        closePopup(popup)
      };
    });
  });
};
clickNoEverley();

//* функция закрытия попапов
const addListenerButtonClose = function () {
  // получим псевдомассив всех кнопок закрытия попапов
  const listCloseButtons = Array.from(document.querySelectorAll(".popup .popup__close"));
  // переберем его присваивая каждой кнопке функционал
  listCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const perentPopup = button.closest(".popup");
      closePopup(perentPopup);
    });
  });
};
addListenerButtonClose();

// открытие попапа профиля
buttonEditPopup.addEventListener("click", () => {
  openPopup(popupProfile);
  popupInputName.value = profileName.textContent;
  popupInputDescription.value = profileDescription.textContent;

  // сброс ошибок
  // const formValid = new FormValidator(popupProfile, validationConfig);
  formValidPopupProfile.resetErorr();
});

// отправка формы редактирования профиля и сохранение текста в input
formProfileEditing.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescription.value;
  closePopup(popupProfile);
});

// открытие попапа создания карточек
buttonAddCard.addEventListener("click", () => {
  openPopup(popupCard);

  // сброс ошибок
  // const formValid = new FormValidator(popupCard, validationConfig);
  formValidpopupCard.resetErorr();
  cardTitle.value = '';
  cardlinkImage.value = '';
});

//!функция для связи Card c попапом
const handleCardClick = (objectData) => {
  const image = new PopupWithImage('.popup_image-open');
  image.open(objectData);
  image.setEventListeners();
};

// //!создание экземпляра класса с карточками
// const cardList = new Section({
//   items: initialCards,
//   renderer: (item) => {
//     const card = new Card(item, `#cards`, handleCardClick);
//     return card.getCard();
//   }
// }, ".elements__list");

// //! создание карточек из массива
// cardList.renderElements();

//* функция добавления карточки в разметку
const addCardHtml = function (el) {
  listCards.prepend(el);
};

//* создание нового экземпляра класса карточки
const createCard = (item) => {
  const card = new Card(item, `#cards`, handleCardClick);
  return card.getCard();
};

// сохранение карточки
formCardSave.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const userCards = { name: cardTitle.value, link: cardlinkImage.value };
  // const card = new Card(userCards, `#cards`);
  // addCardHtml(card.getCard());
  addCardHtml(createCard(userCards));
  closePopup(popupCard);
  cardTitle.value = "";
  cardlinkImage.value = "";
});

//* создадим карточки из массива
initialCards.forEach((item) => {
  addCardHtml(createCard(item));
});

formValidPopupProfile.enableValidation();
formValidpopupCard.enableValidation();

export { popupOpenImage, popupImageLink, popupImageTitle, openPopup };

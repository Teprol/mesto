import '../pages/index.css'; //подключаем главный файл css
import Card from './components/Сard.js';
import initialCards from './utils/cards.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import { validationConfig, popupProfile, buttonEditPopup, popupCard, buttonAddCard, objectSelectors } from './utils/constants.js';

//* экземпляры классов форм
const formValidPopupProfile = new FormValidator(popupProfile, validationConfig);
const formValidpopupCard = new FormValidator(popupCard, validationConfig);

//* экземпляр класса профиля который не форма
const UserProfile = new UserInfo(objectSelectors);

//! экземпляр класса попап профиля
const popupProfile1 = new PopupWithForm('.popup_profile', (evt) => {
  evt.preventDefault();
  UserProfile.setUserInfo(popupProfile1.getInputValues());
  popupProfile1.close();
});

// открытие попапа профиля
buttonEditPopup.addEventListener("click", () => {
  popupProfile1.open();
  popupProfile1.setEventListeners();

  popupProfile1.setInputValues(UserProfile.getUserInfo());
  // сброс ошибок
  formValidPopupProfile.resetErorr();
});

//! экземпляр класса попап создания карточки
const popupCard1 = new PopupWithForm('.popup_card', (evt) => {
  evt.preventDefault();
  cardList.addItem(cardList.renderer(popupCard1.getInputValues()));
  popupCard1.close();
});

// открытие попапа создания карточек
buttonAddCard.addEventListener("click", () => {
  popupCard1.open();
  popupCard1.setEventListeners();
  // сброс ошибок
  formValidpopupCard.resetErorr();
});

//! функция для связи Card c попапом
const handleCardClick = (objectData) => {
  const image = new PopupWithImage('.popup_image-open');
  image.open(objectData);
  image.setEventListeners();
};

//создание экземпляра класса с карточками
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, `#cards`, handleCardClick);
    return card.getCard();
  }
}, ".elements__list");

// создание карточек из массива
cardList.renderElements();

//! включение валидаций форм
formValidPopupProfile.enableValidation();
formValidpopupCard.enableValidation();

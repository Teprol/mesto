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
import Api, { api } from './components/Api.js';

//! рендер карточек через запрос к серверу
api.getCardData()
  .then((cards) => {
    //? создание экземпляра класса с карточками
    const cardList = new Section({
      items: cards,
      renderer: (item) => {
        const card = new Card(item, `#cards`, handleCardClick);
        return card.getCard();
      }
    }, ".elements__list");

    //? создание карточек из массива
    cardList.renderElements();
  })
  .catch((err) => {
    api.infoError(`Ошибка при загрузке карточек`, err);
  });

// //! запрос инфо о пользователе через сервер
api.getUserInfo()
  .then((userInfo) => {
    // userProfile.getServerUserInfo(userInfo);
    userProfile.setUserInfo(userInfo);
  })
  .catch((err) => {
    api.infoError(`Информация профиля с сервера не загружена`, err);
  })

//* экземпляры классов форм
const formValidPopupProfile = new FormValidator(popupProfile, validationConfig);
const formValidpopupCard = new FormValidator(popupCard, validationConfig);

//* экземпляр класса профиля который не форма
const userProfile = new UserInfo(objectSelectors);

//* экземпляр класса попап профиля
const popupProfile1 = new PopupWithForm('.popup_profile', (evt) => {
  evt.preventDefault();

  api.setUserInfo(popupProfile1.getInputValues())
    .then((serverInfoUser) => {
      userProfile.setUserInfo(serverInfoUser);
      popupProfile1.close();
    })
    .catch((err) => {
      api.infoError(`Информация профиля не обнавлена`, err);
    });
  // userProfile.setUserInfo(popupProfile1.getInputValues());
  // popupProfile1.close();
});
popupProfile1.setEventListeners();

// открытие попапа профиля
buttonEditPopup.addEventListener("click", () => {
  popupProfile1.open();
  popupProfile1.setInputValues(userProfile.getUserInfo());
  // сброс ошибок
  formValidPopupProfile.resetErorr();
});

//* экземпляр класса попап создания карточки
const popupCard1 = new PopupWithForm('.popup_card', (evt) => {
  evt.preventDefault();
  cardList.addItem(cardList.renderer(popupCard1.getInputValues()));
  popupCard1.close();
});
popupCard1.setEventListeners();

// открытие попапа создания карточек
buttonAddCard.addEventListener("click", () => {
  popupCard1.open();
  // сброс ошибок
  formValidpopupCard.resetErorr();
});

//* экземпляр класса попапа картинки
const image = new PopupWithImage('.popup_image-open');
image.setEventListeners();

//* функция для связи Card c попапом
const handleCardClick = (objectData) => {
  image.open(objectData);
};

// //создание экземпляра класса с карточками
// const cardList = new Section({
//   items: initialCards,
//   renderer: (item) => {
//     const card = new Card(item, `#cards`, handleCardClick);
//     return card.getCard();
//   }
// }, ".elements__list");

// // создание карточек из массива
// cardList.renderElements();

//* включение валидаций форм
formValidPopupProfile.enableValidation();
formValidpopupCard.enableValidation();

import '../pages/index.css'; //подключаем главный файл css
import Card from './components/Сard.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithSubmit from './components/PopupWithSubmit.js'
import UserInfo from './components/UserInfo.js';
import { validationConfig, popupProfile, buttonEditPopup, popupCard, buttonAddCard, objectSelectors } from './utils/constants.js';
import Api, { api } from './components/Api.js';

Promise.all([api.getCardData(), api.getUserInfo()])
  .then(([cards, userInfo]) => {
    userProfile.getServerUserInfo(userInfo);
    userProfile.setUserInfo(userInfo);
    cardList.getCardsServer(cards.reverse());
    cardList.renderElements();
  })
  .catch((err) => {
    api.infoError(`Ошибка при загрузке данных с сервера`, err);
  });

//! создание экземпляра класса с карточками, колбэк метод рендера карточек
const cardList = new Section({
  renderer: (item) => {
    const card = new Card(item, `#cards`, userProfile.userId, handleCardClick, handleCardDelite);
    return card.getCard();
  }
}, ".elements__list");

//* функция для связи Card c попапом картинки
const handleCardClick = (objectData) => {
  image.open(objectData);
};

//* экземпляр класса попапа картинки
const image = new PopupWithImage('.popup_image-open');
image.setEventListeners();

//! функция удаления карточки
const handleCardDelite = (card, cardId) => {
  confirmation.open(card, cardId);
}

//! экземпляр класса попапа подтверждения
// колбэком функция которая прокинется в класс
const confirmation = new PopupWithSubmit('.popup_confirmation', (card, cardId) => {
  console.log(card);
  console.log(cardId);

  api.deleteCard(cardId)
    .then(() => {
      console.log(`YRAAAAAAAAAAAAAAAAA`);
      card.remove();
      confirmation.close();
    })
});
confirmation.setEventListeners();

//* экземпляры классов форм
const formValidPopupProfile = new FormValidator(popupProfile, validationConfig);
const formValidpopupCard = new FormValidator(popupCard, validationConfig);

//* экземпляр класса профиля который не форма
const userProfile = new UserInfo(objectSelectors);

//* экземпляр класса попап профиля
const popupProfile1 = new PopupWithForm('.popup_profile', (evt) => {
  evt.preventDefault();

  //!изминение инфы пользователя
  api.setUserInfo(popupProfile1.getInputValues())
    .then((serverInfoUser) => {
      userProfile.setUserInfo(serverInfoUser);
      popupProfile1.close();
    })
    .catch((err) => {
      api.infoError(`Информация профиля не обнавлена`, err);
      userProfile.setUserInfo(popupProfile1.getInputValues());
      popupProfile1.close();
    });
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

  //! заливаем карточку на сервер
  api.setCardUser(popupCard1.getInputValues())
    .then((card) => {
      cardList.addItem(cardList.renderer(card));
    })
    .catch((err) => {
      api.infoError(`Карточка не отправлена`, err);
      cardList.addItem(cardList.renderer(popupCard1.getInputValues()));
    })
  popupCard1.close();
});
popupCard1.setEventListeners();

// открытие попапа создания карточек
buttonAddCard.addEventListener("click", () => {
  popupCard1.open();
  // сброс ошибок
  formValidpopupCard.resetErorr();
});

//* включение валидаций форм
formValidPopupProfile.enableValidation();
formValidpopupCard.enableValidation();

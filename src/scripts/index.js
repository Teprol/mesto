import '../pages/index.css'; //подключаем главный файл css
import Card from './components/Сard.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithSubmit from './components/PopupWithSubmit.js'
import UserInfo from './components/UserInfo.js';
import { validationConfig, popupProfile, buttonEditPopup, popupCard, buttonAddCard, objectSelectors, buttonAvatar, popupAvatarNode } from './utils/constants.js';
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

//? сори за малое количество коментов, жестко болею(
//! создание экземпляра класса с карточками, колбэк метод рендера карточек
const cardList = new Section({
  renderer: (item) => {
    const card = new Card(item, `#cards`, userProfile.userId, handleCardClick, handleCardDelite,
      // ставим лайк
      (idCard) => {
        api.addLike(idCard)
          .then((res) => {
            card.setLike(res);
          })
      },
      // убираем лайк
      (idCard) => {
        api.removeLike(idCard)
          .then((res) => {
            card.setLike(res);
          })
      });
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
};

//! экземпляр класса попапа подтверждения
// колбэком функция которая прокинется в класс
const confirmation = new PopupWithSubmit('.popup_confirmation', (card, cardId) => {
  api.deleteCard(cardId)
    .then(() => {
      card.remove();
      confirmation.close();
    })
});
confirmation.setEventListeners();

//* экземпляры классов форм
const formValidPopupProfile = new FormValidator(popupProfile, validationConfig);
const formValidpopupCard = new FormValidator(popupCard, validationConfig);
const formValidPopupAvatar = new FormValidator(popupAvatarNode, validationConfig);

//* экземпляр класса профиля который не форма
const userProfile = new UserInfo(objectSelectors);

//* экземпляр класса попап профиля
const popupProfile1 = new PopupWithForm('.popup_profile', (evt) => {
  evt.preventDefault();

  //!изминение инфы пользователя
  api.setUserInfo(popupProfile1.getInputValues())
    .then((serverInfoUser) => {
      popupProfile1.loadingServer();
      userProfile.setUserInfo(serverInfoUser);
      // popupProfile1.close();
    })
    .catch((err) => {
      api.infoError(`Информация профиля не обнавлена`, err);
      userProfile.setUserInfo(popupProfile1.getInputValues());
      popupProfile1.close();
    }).finally(() => {
      popupProfile1.FinishloadingServer();
      popupProfile1.close();
    })
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
      popupCard1.loadingServer();
      cardList.addItem(cardList.renderer(card));
    })
    .catch((err) => {
      api.infoError(`Карточка не отправлена`, err);
      cardList.addItem(cardList.renderer(popupCard1.getInputValues()));
    }).finally(() => {
      popupCard1.FinishloadingServer();
      popupCard1.close();
    })
});
popupCard1.setEventListeners();

// открытие попапа создания карточек
buttonAddCard.addEventListener("click", () => {
  popupCard1.open();
  // сброс ошибок
  formValidpopupCard.resetErorr();
});

//* экземпляр класса попапа смены аватарки
const popupAvatar = new PopupWithForm('.popup_avatar', (evt) => {
  evt.preventDefault();
  api.newAvatar(popupAvatar.getInputValues())
    .then((userInfo) => {
      popupAvatar.loadingServer();
      userProfile.getServerUserInfo(userInfo);
      userProfile.setUserInfo(userInfo);
    }).catch((err) => {
      api.infoError(`Не удалось сменить аватарку`, err);
    }).finally(() => {
      popupAvatar.FinishloadingServer();
      popupAvatar.close();
    })
});
popupAvatar.setEventListeners();

// открытие попапа смены аватарки
buttonAvatar.addEventListener("click", () => {
  popupAvatar.open();
  // сброс ошибок
  formValidPopupAvatar.resetErorr();
});

//* включение валидаций форм
formValidPopupProfile.enableValidation();
formValidpopupCard.enableValidation();
formValidPopupAvatar.enableValidation();

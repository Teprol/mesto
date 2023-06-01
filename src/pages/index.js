import '../pages/index.css'; //подключаем главный файл css
import Card from '../scripts/components/Сard.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithSubmit from '../scripts/components/PopupWithSubmit.js'
import UserInfo from '../scripts/components/UserInfo.js';
import { validationConfig, popupProfile, buttonEditPopup, popupCard, buttonAddCard, objectSelectors, buttonAvatar, popupAvatarNode } from '../scripts/utils/constants.js';
import Api, { api } from '../scripts/components/Api.js';

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
          }).catch((err) => {
            api.infoError(`Лайк не поставился`, err);
          })
      },
      // убираем лайк
      (idCard) => {
        api.removeLike(idCard)
          .then((res) => {
            card.setLike(res);
          }).catch((err) => {
            api.infoError(`Лайк не удален`, err);
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
    }).catch((err) => {
      api.infoError(`Карточка не удалена`, err);
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
const popupProfileClass = new PopupWithForm('.popup_profile', (evt) => {
  evt.preventDefault();
  popupProfileClass.loadingServer();
  //!изминение инфы пользователя
  api.setUserInfo(popupProfileClass.getInputValues())
    .then((serverInfoUser) => {
      userProfile.setUserInfo(serverInfoUser);
      popupProfileClass.close();
    })
    .catch((err) => {
      api.infoError(`Информация профиля не обнавлена`, err);
      userProfile.setUserInfo(popupProfileClass.getInputValues());
    }).finally(() => {
      popupProfileClass.FinishloadingServer();
    })
});
popupProfileClass.setEventListeners();

// открытие попапа профиля
buttonEditPopup.addEventListener("click", () => {
  popupProfileClass.open();
  popupProfileClass.setInputValues(userProfile.getUserInfo());
  // сброс ошибок
  formValidPopupProfile.resetErorr();
});

//* экземпляр класса попап создания карточки
const popupCardClass = new PopupWithForm('.popup_card', (evt) => {
  evt.preventDefault();
  popupCardClass.loadingServer();
  //! заливаем карточку на сервер
  api.setCardUser(popupCardClass.getInputValues())
    .then((card) => {
      cardList.addItem(cardList.renderer(card));
      popupCardClass.close();
    })
    .catch((err) => {
      api.infoError(`Карточка не отправлена`, err);
      cardList.addItem(cardList.renderer(popupCardClass.getInputValues()));
    }).finally(() => {
      popupCardClass.FinishloadingServer();
    })
});
popupCardClass.setEventListeners();

// открытие попапа создания карточек
buttonAddCard.addEventListener("click", () => {
  popupCardClass.open();
  // сброс ошибок
  formValidpopupCard.resetErorr();
});

//* экземпляр класса попапа смены аватарки
const popupAvatar = new PopupWithForm('.popup_avatar', (evt) => {
  evt.preventDefault();
  popupAvatar.loadingServer();
  api.newAvatar(popupAvatar.getInputValues())
    .then((userInfo) => {
      userProfile.getServerUserInfo(userInfo);
      userProfile.setUserInfo(userInfo);
      popupAvatar.close();
    }).catch((err) => {
      api.infoError(`Не удалось сменить аватарку`, err);
    }).finally(() => {
      popupAvatar.FinishloadingServer();
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

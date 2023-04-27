import Card from './card.js';
import initialCards from './cards.js';
import FormValidator from './FormValidator.js';

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
// const submitProfile = popupProfile.querySelector('.popup__save'); //!кнопка сохранения профиля
// профиль
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile-info__name");
const profileDescription = profile.querySelector(".profile-info__description");
//* попап добавления карточки
const popupCard = document.querySelector(".popup_card");
const buttonAddCard = document.querySelector(".profile__add-button");
const formCardSave = popupCard.querySelector(".popup__form");
const cardTitle = popupCard.querySelector(".popup__input_name");
const cardlinkImage = popupCard.querySelector(".popup__input_description");
// const submitCard = popupCard.querySelector('.popup__save'); //!кнопка сохранения Карточки
//* попап полной картинки
const popupOpenImage = document.querySelector(".popup_image-open")
const popupImageLink = popupOpenImage.querySelector(".popup__image");
const popupImageTitle = popupOpenImage.querySelector(".popup__image-title");
// список карточек
const listCards = document.querySelector(".elements__list");
// шаблон карточки
// const cardTemplate = document.querySelector("#cards").content;

// функция открытия попапа
const openPopup = function (namePopup) {
  namePopup.classList.add("popup_opened");
  document.addEventListener('keydown', closeESC);
};

const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeESC);

  // resetErorr(popup, validationConfig);
};

//закрытие по клавише которое находит единственный на стр элемент и снимает с него класс опена
const closeESC = (evt) => {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    // openPopup.classList.remove('popup_opened');
    closePopup(openPopup);
  }
};

//закрытие при клике мимо попапа
const clickNoEverley = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popup) => {
    popup.addEventListener('mousedown', (e) => {
      // e.target === popup ? closePopup(popup) : null;
      if (e.target === popup) {
        closePopup(popup)
      };
    });
  });
};
clickNoEverley();

// функция закрытия попапов
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

  //* сброс ошибок
  const formValid = new FormValidator(popupProfile, validationConfig);
  formValid.resetErorr();
  // resetErorr(popupProfile, validationConfig);
  // const inputList = Array.from(popupProfile.querySelectorAll(validationConfig.inputSelector));
  // toggleButton(inputList, submitProfile, validationConfig);
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

  //* сброс ошибок
  const formValid = new FormValidator(popupCard, validationConfig);
  formValid.resetErorr();
  // resetErorr(popupCard, validationConfig);

  // const inputList = Array.from(popupCard.querySelectorAll(validationConfig.inputSelector));
  cardTitle.value = '';
  cardlinkImage.value = '';
  // toggleButton(inputList, submitCard, validationConfig);
});

// функция добавления карточки в разметку
const addCardHtml = function (el) {
  listCards.prepend(el);
};

// функция рендера карточки
// const renderCard = function (element) {
//   // карточки
//   const card = cardTemplate.querySelector(".elements__item").cloneNode(true);
//   const image = card.querySelector(".element__image");
//   const title = card.querySelector(".element__title");
//   const like = card.querySelector(".element__like");
//   const trash = card.querySelector(".element__button-close");

//   // событие лайка
//   like.addEventListener("click", () => {
//     like.classList.toggle("element__like_active");
//   });

//   // событие удаление карточки
//   trash.addEventListener("click", () => {
//     card.remove();
//   });

//   // откытие картинки
//   image.addEventListener("click", () => {
//     openPopup(popupOpenImage);
//     popupImageLink.src = element.link;
//     popupImageLink.alt = element.name;
//     popupImageTitle.textContent = element.name;
//   });

//   image.src = element.link;
//   image.alt = element.name;
//   title.textContent = element.name;

//   return card;
//   // listCards.prepend(card);
// };

//? сохранение карточки
formCardSave.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const userCards = { name: cardTitle.value, link: cardlinkImage.value };
  const card = new Card(userCards, `#cards`);
  addCardHtml(card.getCard());
  // addCardHtml(renderCard(userCards));
  closePopup(popupCard);
  cardTitle.value = "";
  cardlinkImage.value = "";
});

// создадим карточки из массива
initialCards.forEach((item) => {
  const card = new Card(item, `#cards`);
  addCardHtml(card.getCard());
  // addCardHtml(renderCard(item));
});


//!все что ниже это новое
//*обход всего документа и поиск всех элементов форм попапа
const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(`${object.formSelector}`));

  formList.forEach((form) => {

    const validForm = new FormValidator(form, object);
    validForm.enableValidation();
    // setEventListenerInput(form, object);
  });
};
enableValidation(validationConfig);


export { popupOpenImage, popupImageLink, popupImageTitle, openPopup };

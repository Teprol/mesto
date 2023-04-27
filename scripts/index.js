import Card from './Card.js';
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

//? файл Card.js  я сделал с большой буквы, надеюсь не прийдется с git возится, если ошибка будет надо бы найти статью как исправить
//? надеюсь я правильно понял, что от меня хотят
const formValidPopupProfile = new FormValidator(popupProfile, validationConfig);
const formValidpopupCard = new FormValidator(popupCard, validationConfig);

// функция открытия попапа
const openPopup = function (namePopup) {
  namePopup.classList.add("popup_opened");
  document.addEventListener('keydown', closeESC);
};

const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeESC);
};

//закрытие по клавише которое находит единственный на стр элемент и снимает с него класс опена
const closeESC = (evt) => {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
};

//закрытие при клике мимо попапа
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

  //! сброс ошибок
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

  //! сброс ошибок
  // const formValid = new FormValidator(popupCard, validationConfig);
  formValidpopupCard.resetErorr();
  cardTitle.value = '';
  cardlinkImage.value = '';
});

// функция добавления карточки в разметку
const addCardHtml = function (el) {
  listCards.prepend(el);
};

//
const createCard = (item) => {
  const card = new Card(item, `#cards`);
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

// создадим карточки из массива
initialCards.forEach((item) => {
  // const card = new Card(item, `#cards`);
  // addCardHtml(card.getCard());
  addCardHtml(createCard(item));
});


//все что ниже это новое
//обход всего документа и поиск всех элементов форм попапа
// const enableValidation = (object) => {
//   const formList = Array.from(document.querySelectorAll(`${object.formSelector}`));

//   formList.forEach((form) => {
//     const validForm = new FormValidator(form, object);
//     validForm.enableValidation();
//   });
// };
// enableValidation(validationConfig);

//? не понял почему не проще найти и пройтись по всем формам :(
formValidPopupProfile.enableValidation();
formValidpopupCard.enableValidation();

export { popupOpenImage, popupImageLink, popupImageTitle, openPopup };

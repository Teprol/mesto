//? настройки для валидации
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
// переменые
//* попап профиля
export const popupProfile = document.querySelector(".popup_profile");
export const buttonEditPopup = document.querySelector(".edit-button");
// форма
export const formProfileEditing = popupProfile.querySelector(".popup__form");
export const popupInputName = popupProfile.querySelector(".popup__input_name");
export const popupInputDescription = popupProfile.querySelector(".popup__input_description");
// const submitProfile = popupProfile.querySelector('.popup__save'); //!кнопка сохранения профиля
// профиль
export const profile = document.querySelector(".profile");
export const profileName = profile.querySelector(".profile-info__name");
export const profileDescription = profile.querySelector(".profile-info__description");
//* попап добавления карточки
export const popupCard = document.querySelector(".popup_card");
export const buttonAddCard = document.querySelector(".profile__add-button");
export const formCardSave = popupCard.querySelector(".popup__form");
export const cardTitle = popupCard.querySelector(".popup__input_name");
export const cardlinkImage = popupCard.querySelector(".popup__input_description");
// const submitCard = popupCard.querySelector('.popup__save'); //!кнопка сохранения Карточки
//* попап полной картинки
export const popupOpenImage = document.querySelector(".popup_image-open")
export const popupImageLink = popupOpenImage.querySelector(".popup__image");
export const popupImageTitle = popupOpenImage.querySelector(".popup__image-title");
// список карточек
export const listCards = document.querySelector(".elements__list");
// шаблон карточки
// const cardTemplate = document.querySelector("#cards").content;

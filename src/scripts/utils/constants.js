// настройки для валидации
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// попап профиля
export const popupProfile = document.querySelector(".popup_profile");
// кнопка редактирования профиля
export const buttonEditPopup = document.querySelector(".edit-button");
// попап добавления карточки
export const popupCard = document.querySelector(".popup_card");
// кнопка добавления карточки
export const buttonAddCard = document.querySelector(".profile__add-button");
// объект с селекторами полей профиля
export const objectSelectors = {
  profileDescription: ".profile-info__description",
  profileName: ".profile-info__name"
}
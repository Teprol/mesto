// переменые

// попап
let popup = document.querySelector(".popup");
let buttonEditPopup = document.querySelector(".edit-button");
let buttonClosePopup = popup.querySelector(".popup__close");

// форма
let form = popup.querySelector(".popup__container");
let popupInputName = popup.querySelector(".popup__name");
let popupInputDescription = popup.querySelector(".popup__hobby");

// профиль
let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile-info__name");
let profileDescription = profile.querySelector(".profile-info__description");

// текст из профиля в поля попапа
const getTextProfile = function () {
  popupInputName.value = profileName.textContent;
  popupInputDescription.value = profileDescription.textContent;
};
getTextProfile();

// открытие попапа
buttonEditPopup.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

// закрытие попапа
buttonClosePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup_opened");
  getTextProfile();
});

// отправка формы и сохранение текста в input
form.addEventListener("submit", function(evt) {
  evt.preventDefault();

  profileName.textContent = popupInputName.value;
  profileDescription.textContent =  popupInputDescription.value;
});

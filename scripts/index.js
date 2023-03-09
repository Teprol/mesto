// переменые

// попап
let popup = document.querySelector(".popup");
let buttonEditPopup = document.querySelector(".edit-button");
let buttonClosePopup = popup.querySelector(".popup__close");

// форма
let form = popup.querySelector(".popup__form");
let popupInputName = popup.querySelector(".popup__input_name");
let popupInputDescription = popup.querySelector(".popup__input_description");

// профиль
let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile-info__name");
let profileDescription = profile.querySelector(".profile-info__description");

// открытие попапа
buttonEditPopup.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  popupInputName.value = profileName.textContent;
  popupInputDescription.value = profileDescription.textContent;
});

// закрытие попапа
buttonClosePopup.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

// отправка формы и сохранение текста в input
form.addEventListener("submit", function(evt) {
  evt.preventDefault();

  profileName.textContent = popupInputName.value;
  profileDescription.textContent =  popupInputDescription.value;
  popup.classList.remove("popup_opened");
});

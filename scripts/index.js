// переменые

// массив с карточками
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// попап
const popup = document.querySelector(".popup");
const buttonEditPopup = document.querySelector(".edit-button");
const buttonClosePopup = popup.querySelector(".popup__close");

// форма
const form = popup.querySelector(".popup__form");
const popupInputName = popup.querySelector(".popup__input_name");
const popupInputDescription = popup.querySelector(".popup__input_description");

// профиль
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile-info__name");
const profileDescription = profile.querySelector(".profile-info__description");

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
form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescription.value;
  popup.classList.remove("popup_opened");
});

//* функция рендера карточки
const renderCard = function (element) {
  // список карточек
  const listCards = document.querySelector(".elements__list");

  // карточки
  const cardTemplate = document.querySelector("#cards").content;
  const card = cardTemplate.querySelector(".elements__item").cloneNode(true);
  const image = card.querySelector(".element__image");
  const title = card.querySelector(".element__title");

  image.src = element.link;
  title.textContent = element.name;

  listCards.append(card);
};

// создадим карточки из массива
initialCards.forEach((item) => {
  //! сюда вставляем функцию которая будет рендерить карточку с каждым элементом массива
  renderCard(item);
});

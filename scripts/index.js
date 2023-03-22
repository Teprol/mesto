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

//* попап профиля
const popupProfile = document.querySelector(".popup_profile");
const buttonEditPopup = document.querySelector(".edit-button");
// форма
const form = popupProfile.querySelector(".popup__form");
const popupInputName = popupProfile.querySelector(".popup__input_name");
const popupInputDescription = popupProfile.querySelector(".popup__input_description");
// профиль
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile-info__name");
const profileDescription = profile.querySelector(".profile-info__description");
//* попап добавления карточки
const popupCard = document.querySelector(".popup_card");
const buttonAddCard = document.querySelector(".profile__add-button");

// функция открытия попапа
const openPopup = function (namePopup) {
  namePopup.classList.add("popup_opened");
};

// функция закрытия попапов
const closePopup = function () {
  // получим псевдомассив всех кнопок закрытия попапов
  listCloseButtons = document.querySelectorAll(".popup .popup__close");
  // переберем его присваивая каждой кнопке функционал
  listCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const perentPopup = button.parentElement.parentElement;
      perentPopup.classList.remove("popup_opened");
    });
  });
};
closePopup();

// открытие попапа профиля
buttonEditPopup.addEventListener("click", () => {
  openPopup(popupProfile);
  popupInputName.value = profileName.textContent;
  popupInputDescription.value = profileDescription.textContent;
});

// отправка формы редактирования профиля и сохранение текста в input
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescription.value;
  popupProfile.classList.remove("popup_opened");
});

// открытие попапа создания карточек
buttonAddCard.addEventListener('click', () => {
  openPopup(popupCard);
});

// функция рендера карточки
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

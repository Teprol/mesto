// переменые
//* попап профиля
const popupProfile = document.querySelector(".popup_profile");
const buttonEditPopup = document.querySelector(".edit-button");
// форма
const formProfileEditing = popupProfile.querySelector(".popup__form"); //? поиск и так ограничен не всем документом а конкретным попапом, возможно вы не заметили
const popupInputName = popupProfile.querySelector(".popup__input_name");
const popupInputDescription = popupProfile.querySelector(".popup__input_description");
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
//* попап полной картинки
const popupOpenImage = document.querySelector(".popup_image-open")
const popupImageLink = popupOpenImage.querySelector(".popup__image");
const popupImageTitle = popupOpenImage.querySelector(".popup__image-title");
// список карточек
const listCards = document.querySelector(".elements__list");
// шаблон карточки
const cardTemplate = document.querySelector("#cards").content;

// функция открытия попапа
const openPopup = function (namePopup) {
  namePopup.classList.add("popup_opened");
};

const closePopupSubmit = function (popup) {
  popup.classList.remove("popup_opened");
};

// функция закрытия попапов
const closePopup = function () {
  // получим псевдомассив всех кнопок закрытия попапов
  listCloseButtons = document.querySelectorAll(".popup .popup__close");
  // переберем его присваивая каждой кнопке функционал
  listCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const perentPopup = button.closest(".popup");
      // perentPopup.classList.remove("popup_opened");
      closePopupSubmit(perentPopup);
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
formProfileEditing.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescription.value;
  // popupProfile.classList.remove("popup_opened");
  closePopupSubmit(popupProfile);
});

// открытие попапа создания карточек
buttonAddCard.addEventListener("click", () => {
  openPopup(popupCard);
});

// функция добавления карточки в разметку
const addCardHtml = function (el) {
  listCards.prepend(el);
};

// функция рендера карточки
const renderCard = function (element) {
  // карточки
  const card = cardTemplate.querySelector(".elements__item").cloneNode(true);
  const image = card.querySelector(".element__image");
  const title = card.querySelector(".element__title");
  const like = card.querySelector(".element__like");
  const trash = card.querySelector(".element__button-close");

  // событие лайка
  like.addEventListener("click", () => {
    like.classList.toggle("element__like_active");
  });

  // событие удаление карточки
  trash.addEventListener("click", () => {
    card.remove();
  });

  // откытие картинки
  image.addEventListener("click", () => {
    openPopup(popupOpenImage);
    popupImageLink.src = element.link;
    popupImageLink.alt = element.name;
    popupImageTitle.textContent = element.name;
  });

  image.src = element.link;
  image.alt = element.name;
  title.textContent = element.name;

  return card;
  // listCards.prepend(card);
};

// сохранение карточки
formCardSave.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const userCards = { name: cardTitle.value, link: cardlinkImage.value };
  // renderCard(userCards);
  addCardHtml(renderCard(userCards));
  closePopupSubmit(popupCard);
  cardTitle.value = "";
  cardlinkImage.value = "";
});

// создадим карточки из массива
initialCards.forEach((item) => {
  // renderCard(item);
  addCardHtml(renderCard(item));
});

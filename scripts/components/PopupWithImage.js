import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);

    this._popupImageLink = this._selectorPopup.querySelector(".popup__image");
    this._popupImageTitle = this._selectorPopup.querySelector(".popup__image-title");
  }

  open = (objectData) => {
    //? перезаписывать родительский метод open
    //? вставлять в попап картинку с src изображения и подписью к картинке.
    this._popupImageLink.src = objectData.link;
    this._popupImageLink.alt = objectData.name;
    this._popupImageTitle.textContent = objectData.name;
    super.open();
  }
}

export default PopupWithImage;

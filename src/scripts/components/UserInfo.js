class UserInfo {
  constructor(objectSelectors) {
    this._profileName = document.querySelector(objectSelectors.profileName);
    this._profileDescription = document.querySelector(objectSelectors.profileDescription);
    this._profileAvatar = document.querySelector(objectSelectors.profileAvatar);

    this._profileInfoServer;
    this._serverStatus;
  };

  getServerUserInfo = (object) => {
    this._profileInfoServer = object;
    //статус сервера
    this._serverStatus = true;
  }

  getUserInfo = () => {
    //проверка на доступность сервера
    if (this._serverStatus) {
      console.log(`OK`);
      return this._profileInfoServer;
    } else {
      console.log(`NOOOO`);
      return { name: this._profileName.textContent, about: this._profileDescription.textContent };
    }
  };

  setUserInfo = (objectUser) => {
    this._profileName.textContent = objectUser.name;
    this._profileDescription.textContent = objectUser.about;

    //проверка на заполнение аватарки
    if (objectUser.avatar) {
      this._profileAvatar.src = objectUser.avatar;
    }
  };
}

export default UserInfo;

class UserInfo {
  constructor(objectSelectors) {
    this._profileName = document.querySelector(objectSelectors.profileName);
    this._profileDescription = document.querySelector(objectSelectors.profileDescription);
    this._profileAvatar = document.querySelector(objectSelectors.profileAvatar);

    this._profileInfoServer;
    this.userId;
    // this._serverStatus;
  };

  getServerUserInfo = (object) => {
    this._profileInfoServer = object;
    this.userId = object._id;
    //статус сервера
    // this._serverStatus = true;
  }

  getUserInfo = () => {
    return { name: this._profileName.textContent, about: this._profileDescription.textContent };
    // return this._profileInfoServer;

    // //проверка на доступность сервера
    // if (this._serverStatus) {
    //   return this._profileInfoServer;
    // } else {
    //   return { name: this._profileName.textContent, about: this._profileDescription.textContent };
    // }
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

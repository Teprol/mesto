class UserInfo {
  constructor(objectSelectors) {
    this._profileName = document.querySelector(objectSelectors.profileName);
    this._profileDescription = document.querySelector(objectSelectors.profileDescription);
  };

  getUserInfo = () => {
    return { name: this._profileName.textContent, description: this._profileDescription.textContent };
  };

  setUserInfo = (objectUser) => {
    this._profileName.textContent = objectUser.name;
    this._profileDescription = objectUser.description;
  };
}

export default UserInfo;

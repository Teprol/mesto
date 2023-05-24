import { token, cohort } from '../utils/constants';

class Api {
  constructor(cohortId, token) {
    this._cohortId = cohortId;
    this._token = token;
  }

  getUserInfo() {
    return fetch(`https://nomoreparties.co/v1/${this._cohortId}/cards `, {
      headers: {
        authorization: `${this._token}`
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
        }
      })
      .catch((err) => {
        console.log(`%cВозникла ошибка при отправки запроса на карточки`, `color: red; font-size: 24px; background-color: black; padding: 3px; text-align: center;`)
        console.log(err);
      })
  }
}

export const api = new Api(cohort, token);

import { token, cohort } from '../utils/constants';

class Api {
  constructor(cohortId, token) {
    this._cohortId = cohortId;
    this._token = token;
  }

  //при ошибке выводит в консоль посвеченную надпись об ошибке
  infoError = (err, errInf) => {
    console.log(`%c${err}`, `color: red; font-size: 24px; background-color: black; padding: 3px; text-align: center;`)
    console.error(errInf);
  }

  getCardData = () => {
    return fetch(`https://nomoreparties.co/v1/${this._cohortId}/cards`, {
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
  }

  getUserInfo = () => {
    return fetch(`https://nomoreparties.co/v1/${this._cohortId}/users/me`, {
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
  }
}

export const api = new Api(cohort, token);

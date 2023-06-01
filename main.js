/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o,i,c,u,a){var l=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"setLike",(function(t){var e=t.likes;l.likesArr=e,l._likeCounter.textContent=e.length,l._isLiked()?l._like.classList.add("element__like_active"):l._like.classList.remove("element__like_active")})),n(this,"_handleLikeClick",(function(){l._isLiked()?l._removeLike(l._cardId):l._addLike(l._cardId)})),n(this,"_handleTrashClick",(function(){l._handleCardDelite(l._card,l._cardId)})),n(this,"_handleOpenImageClick",(function(){l._handleCardClick(l._element)})),this._element=e,this._template=document.querySelector(r).content,this._card=this._template.querySelector(".elements__item").cloneNode(!0),this._image=this._card.querySelector(".element__image"),this._title=this._card.querySelector(".element__title"),this._like=this._card.querySelector(".element__like"),this._likeCounter=this._card.querySelector(".element__like-count"),this._trash=this._card.querySelector(".element__button-close"),this._userId=o,this._ownerid=this._element.owner._id,this._cardId=this._element._id,this._handleCardClick=i,this._handleCardDelite=c,this._addLike=u,this._removeLike=a}var r,o;return r=t,(o=[{key:"_render",value:function(){this._image.src=this._element.link,this._image.alt=this._element.name,this._title.textContent=this._element.name,this.setLike(this._element),this._userId!==this._ownerid&&this._trash.remove()}},{key:"_isLiked",value:function(){var t=this;return this.likesArr.find((function(e){return e._id===t._userId}))}},{key:"_addListeners",value:function(){this._like.addEventListener("click",this._handleLikeClick),this._trash.addEventListener("click",this._handleTrashClick),this._image.addEventListener("click",this._handleOpenImageClick)}},{key:"getCard",value:function(){return this._render(),this._addListeners(),this._card}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();const i=o;function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function a(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}const f=a((function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_disabledSubmitButton",(function(){r._button.classList.add("".concat(r._object.inactiveButtonClass)),r._button.disabled=!0})),l(this,"_activeSubmitButton",(function(){r._button.classList.remove("".concat(r._object.inactiveButtonClass)),r._button.disabled=!1})),l(this,"_checkInputsInvalid",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),l(this,"_toggleButton",(function(){r._checkInputsInvalid()?r._disabledSubmitButton():r._activeSubmitButton()})),l(this,"_showInputError",(function(t){var e=r._formValid.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(r._object.inputErrorClass)),e.classList.add("".concat(r._object.errorClass)),e.textContent=t.validationMessage})),l(this,"_hideInputError",(function(t){var e=r._formValid.querySelector(".".concat(t.id,"-error"));t.classList.remove("".concat(r._object.inputErrorClass)),e.classList.remove("".concat(r._object.errorClass)),e.textContent=""})),l(this,"_checkInputValid",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t)})),l(this,"resetErorr",(function(){r._toggleButton(),r._inputList.forEach((function(t){r._hideInputError(t)}))})),l(this,"enableValidation",(function(){r._toggleButton(),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValid(t),r._toggleButton()}))}))})),this._object=n,this._formValid=e,this._inputList=Array.from(this._formValid.querySelectorAll(this._object.inputSelector)),this._button=this._formValid.querySelector("".concat(this._object.submitButtonSelector))}));function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function d(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function b(t,e,n){return(e=m(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}const h=d((function t(e,n){var r=this,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"getCardsServer",(function(t){r._items=t})),b(this,"renderElements",(function(){r._items.forEach((function(t){r.addItem(r.renderer(t))}))})),b(this,"addItem",(function(t){r._container.prepend(t)})),this._items,this.renderer=o,this._container=document.querySelector(n)}));function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function g(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}const S=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=g(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._selectorPopup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._selectorPopup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._selectorPopup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._selectorPopup.querySelector(".popup__close").addEventListener("click",(function(){t.close()})),this._selectorPopup.addEventListener("mousedown",(function(e){e.target===t._selectorPopup&&t.close()}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function O(t){var e=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===w(e)?e:String(e)}const I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(n);if(r){var o=E(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return k(t)}(this,t)});function i(t){var e,n,r,c,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=k(n=o.call(this,t)),u=function(t){n._popupImageLink.src=t.link,n._popupImageLink.alt=t.name,n._popupImageTitle.textContent=t.name,P((e=k(n),E(i.prototype)),"open",e).call(e)},(c=O(c="open"))in r?Object.defineProperty(r,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[c]=u,n._popupImageLink=n._selectorPopup.querySelector(".popup__image"),n._popupImageTitle=n._selectorPopup.querySelector(".popup__image-title"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(S);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,A(r.key),r)}}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}function D(t,e,n){return(e=A(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A(t){var e=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===C(e)?e:String(e)}const B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(c,t);var e,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return q(t)}(this,t)});function c(t,e){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),D(q(o=i.call(this,t)),"getInputValues",(function(){return o._userInputs={},o._inputList.forEach((function(t){o._userInputs[t.name]=t.value})),o._userInputs})),D(q(o),"setInputValues",(function(t){o._inputList.forEach((function(e){e.value=t[e.name]}))})),D(q(o),"setEventListeners",(function(){R((n=q(o),x(c.prototype)),"setEventListeners",n).call(n),o._form.addEventListener("submit",o._sabmitFormColback)})),D(q(o),"close",(function(){R((r=q(o),x(c.prototype)),"close",r).call(r),o._form.reset()})),o._sabmitFormColback=e,o._form=o._selectorPopup.querySelector(".popup__form"),o._inputList=Array.from(o._selectorPopup.querySelectorAll(".popup__input")),o._buttonSave=o._selectorPopup.querySelector(".popup__save"),o._buttonSaveText=o._buttonSave.value,o}return e=c,(n=[{key:"loadingServer",value:function(){this._buttonSave.textContent="Сохранение..."}},{key:"FinishloadingServer",value:function(){this._buttonSave.textContent=this._buttonSaveText}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(S);function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function z(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=F(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},N.apply(this,arguments)}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(t)}function J(t,e,n){return(e=H(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function H(t){var e=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===V(e)?e:String(e)}const M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=F(n);if(r){var o=F(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return z(t)}(this,t)});function i(t,e){var n,r,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),J(z(c=o.call(this,t)),"open",(function(t,e){c._card=t,c._cardId=e,N((n=z(c),F(i.prototype)),"open",n).call(n)})),J(z(c),"setEventListeners",(function(){N((r=z(c),F(i.prototype)),"setEventListeners",r).call(r),c._form.addEventListener("submit",(function(t){t.preventDefault(),c._sabmitFormColback(c._card,c._cardId)}))})),c._sabmitFormColback=e,c._form=c._selectorPopup.querySelector(".popup__form"),c}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(S);function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,W(r.key),r)}}function K(t,e,n){return e&&G(t.prototype,e),n&&G(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Q(t,e,n){return(e=W(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function W(t){var e=function(t,e){if("object"!==$(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===$(e)?e:String(e)}const X=K((function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Q(this,"getServerUserInfo",(function(t){n._profileInfoServer=t,n.userId=t._id})),Q(this,"getUserInfo",(function(){return{name:n._profileName.textContent,about:n._profileDescription.textContent}})),Q(this,"setUserInfo",(function(t){n._profileName.textContent=t.name,n._profileDescription.textContent=t.about,t.avatar&&(n._profileAvatar.src=t.avatar)})),this._profileName=document.querySelector(e.profileName),this._profileDescription=document.querySelector(e.profileDescription),this._profileAvatar=document.querySelector(e.profileAvatar),this._profileInfoServer,this.userId}));var Y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Z=document.querySelector(".popup_profile"),tt=document.querySelector(".edit-button"),et=document.querySelector(".popup_card"),nt=document.querySelector(".profile__add-button"),rt=document.querySelector(".popup_avatar"),ot=document.querySelector(".profile__avatar-edit");function it(t){return it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it(t)}function ct(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,lt(r.key),r)}}function ut(t,e,n){return e&&ct(t.prototype,e),n&&ct(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function at(t,e,n){return(e=lt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lt(t){var e=function(t,e){if("object"!==it(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==it(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===it(e)?e:String(e)}var st=new(ut((function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),at(this,"infoError",(function(t,e){console.log("%c".concat(t),"color: red; font-size: 24px; background-color: black; padding: 3px; text-align: center;"),console.error(e)})),at(this,"getCardData",(function(){return fetch("https://nomoreparties.co/v1/".concat(r._cohortId,"/cards"),{headers:{authorization:"".concat(r._token)}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))})),at(this,"getUserInfo",(function(){return fetch("https://nomoreparties.co/v1/".concat(r._cohortId,"/users/me"),{headers:{authorization:"".concat(r._token)}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))})),at(this,"setUserInfo",(function(t){var e=t.name,n=t.about;return fetch("https://mesto.nomoreparties.co/v1/".concat(r._cohortId,"/users/me"),{method:"PATCH",headers:{authorization:"".concat(r._token),"Content-Type":"application/json"},body:JSON.stringify({name:e,about:n})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))})),at(this,"setCardUser",(function(t){var e=t.name,n=t.link;return fetch("https://mesto.nomoreparties.co/v1/".concat(r._cohortId,"/cards"),{method:"POST",headers:{authorization:"".concat(r._token),"Content-Type":"application/json"},body:JSON.stringify({name:e,link:n})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))})),at(this,"deleteCard",(function(t){return fetch("https://mesto.nomoreparties.co/v1/".concat(r._cohortId,"/cards/").concat(t),{method:"DELETE",headers:{authorization:"".concat(r._token)}}).then((function(e){return e.ok?e.json():(console.log(t),Promise.reject("Что-то пошло не так: ".concat(e.status)))}))})),at(this,"addLike",(function(t){return fetch("https://mesto.nomoreparties.co/v1/".concat(r._cohortId,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:"".concat(r._token)}}).then((function(e){return e.ok?e.json():(console.log(t),Promise.reject("Что-то пошло не так: ".concat(e.status)))}))})),at(this,"removeLike",(function(t){return fetch("https://mesto.nomoreparties.co/v1/".concat(r._cohortId,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:"".concat(r._token)}}).then((function(e){return e.ok?e.json():(console.log(t),Promise.reject("Что-то пошло не так: ".concat(e.status)))}))})),at(this,"newAvatar",(function(t){var e=t.avatar;return fetch("https://mesto.nomoreparties.co/v1/".concat(r._cohortId,"/users/me/avatar "),{method:"PATCH",headers:{authorization:"".concat(r._token),"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))})),this._cohortId=e,this._token=n})))("cohort-66","aa1ee32f-1c0f-4889-af2b-f7e1de805230");function ft(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Promise.all([st.getCardData(),st.getUserInfo()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,c,u=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return ft(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ft(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];gt.getServerUserInfo(i),gt.setUserInfo(i),pt.getCardsServer(o.reverse()),pt.renderElements()})).catch((function(t){st.infoError("Ошибка при загрузке данных с сервера",t)}));var pt=new h({renderer:function(t){var e=new i(t,"#cards",gt.userId,yt,bt,(function(t){st.addLike(t).then((function(t){e.setLike(t)})).catch((function(t){st.infoError("Лайк не поставился",t)}))}),(function(t){st.removeLike(t).then((function(t){e.setLike(t)})).catch((function(t){st.infoError("Лайк не удален",t)}))}));return e.getCard()}},".elements__list"),yt=function(t){dt.open(t)},dt=new I(".popup_image-open");dt.setEventListeners();var bt=function(t,e){mt.open(t,e)},mt=new M(".popup_confirmation",(function(t,e){st.deleteCard(e).then((function(){t.remove(),mt.close()})).catch((function(t){st.infoError("Карточка не удалена",t)}))}));mt.setEventListeners();var ht=new f(Z,Y),vt=new f(et,Y),_t=new f(rt,Y),gt=new X({profileDescription:".profile-info__description",profileName:".profile-info__name",profileAvatar:".profile__avatar"}),St=new B(".popup_profile",(function(t){t.preventDefault(),St.loadingServer(),st.setUserInfo(St.getInputValues()).then((function(t){gt.setUserInfo(t),St.close()})).catch((function(t){st.infoError("Информация профиля не обнавлена",t),gt.setUserInfo(St.getInputValues())})).finally((function(){St.FinishloadingServer()}))}));St.setEventListeners(),tt.addEventListener("click",(function(){St.open(),St.setInputValues(gt.getUserInfo()),ht.resetErorr()}));var wt=new B(".popup_card",(function(t){t.preventDefault(),wt.loadingServer(),st.setCardUser(wt.getInputValues()).then((function(t){pt.addItem(pt.renderer(t)),wt.close()})).catch((function(t){st.infoError("Карточка не отправлена",t),pt.addItem(pt.renderer(wt.getInputValues()))})).finally((function(){wt.FinishloadingServer()}))}));wt.setEventListeners(),nt.addEventListener("click",(function(){wt.open(),vt.resetErorr()}));var jt=new B(".popup_avatar",(function(t){t.preventDefault(),jt.loadingServer(),st.newAvatar(jt.getInputValues()).then((function(t){gt.getServerUserInfo(t),gt.setUserInfo(t),jt.close()})).catch((function(t){st.infoError("Не удалось сменить аватарку",t)})).finally((function(){jt.FinishloadingServer()}))}));jt.setEventListeners(),ot.addEventListener("click",(function(){jt.open(),_t.resetErorr()})),ht.enableValidation(),vt.enableValidation(),_t.enableValidation()})();
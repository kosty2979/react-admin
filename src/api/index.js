import Axios from 'axios';
// import ApiHelper from '../utils/ApiHelper';
import Config from '../config';

const APIPath = Config.APIPath;
const APIAccessPath = `${APIPath}user/`;


class Api {
  constructor() {
    const user = localStorage.getItem('_user'); //eslint-disable-line no-undef

    try {
      this._user = user ? JSON.parse(user) : null; //eslint-disable-line no-underscore-dangle
    } catch (e) {
      this._user = null; //eslint-disable-line no-underscore-dangle
    }
  }
  set user(data) {
    this._user = data; //eslint-disable-line no-underscore-dangle
    localStorage.setItem('_user', JSON.stringify(data)); //eslint-disable-line no-undef
    return this._user; //eslint-disable-line no-underscore-dangle
  }

  get user() {
    return this._user; //eslint-disable-line no-underscore-dangle
  }

  login(loginData) {
    return Axios.post(`${APIAccessPath}loginBO`, loginData);
  }

  logout() {
    this._user = null; //eslint-disable-line no-underscore-dangle
    localStorage.removeItem('_user'); //eslint-disable-line no-undef
  }

  // getUser() {
  //   return ApiHelper.send({
  //     method: 'get',
  //     url: `${APIPath}`
  //   });
  // },
}

export default new Api();

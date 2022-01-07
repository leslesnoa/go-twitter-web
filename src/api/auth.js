import { result } from "lodash";
import {API_HOST, TOKEN} from "../utils/constant";
import jwtDecode from "jwt-decode";

export function signUpApi(user) {
  const url = `${API_HOST}/register`;
  const userTemp = {
    ...user,
    email: user.email.toLowerCase(),
    birth: new Date()
  };
  // console.log(user);
  // console.log(url);

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userTemp)
  };

  return fetch(url, params)
    .then(response => {
      if(response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Email no disenable" };
    })
    .then(result => {
      return result
    })
    .catch(err => {
      return err;
    });
}

export function signInApi(user) {
  const url = `${API_HOST}/login`;

  const data = {
    ...user,
    email: user.email.toLowerCase()
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch(url, params)
    .then(response => {
      if(response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { message: "username or password is incorrected" };
    })
    .then(result => {
      return result
    })
    .catch(err => {
      return err;
    });
}

export function setTokenApi(token) {
  localStorage.setItem(TOKEN, token);
}

export function getTokenApi() {
  return localStorage.getItem(TOKEN);
}

export function logoutApi() {
  localStorage.removeItem(TOKEN);
}

export function isUserLoginedApi() {
  const token = getTokenApi();

  if(!token) {
    return null;
  }
  // if()
  if (isExpired(token)) {
    logoutApi();
  }
  return jwtDecode(token);
}

function isExpired(token) {
  const { exp } = jwtDecode(token);
  const expire = exp * 1000;
  const timeout = expire - Date.now();

  if(timeout < 0) {
    return true;
  }
  return false;
}
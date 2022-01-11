import { API_HOST } from "../utils/constant";
import { getTokenApi } from "./auth";

export function checkFollowApi(userId) {
  const url = `${API_HOST}/consultRelation?id=${userId}`

  const params = {
    // method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`
    },
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result
    })
    .catch(err => {
      return err;
    });
}

export function followUserApi(userId) {
  const url = `${API_HOST}/insertRelation?id=${userId}`

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`
    },
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result
    })
    .catch(err => {
      return err;
    });
}

export function unFollowUserApi(userId) {
  const url = `${API_HOST}/deleteRelation?id=${userId}`

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`
    },
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result
    })
    .catch(err => {
      return err;
    });
}

export function getFollowsApi(paramsUrl) {
  const url = `${API_HOST}/listUsers?${paramsUrl}`;

  const params = {
    headers: {
      Authorization: `Bearer ${getTokenApi()}`,
    },
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
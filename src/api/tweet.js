import { API_HOST } from "../utils/constant";
import { getTokenApi } from "./auth";

export function addTweetApi(message) {
  const url = `${API_HOST}/tweet`;
  const data = {
    message
  }

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`
    },
    body: JSON.stringify(data)
  };

  return fetch(url, params)
    .then(response => {
      if(response.status >= 200 && response.status < 300) {
        return {code: response.status, message: "Tweet send"};
      }
      return {code: 500, message: "Error by server"};
    })
    .catch(err => {
      return err;
    });
}
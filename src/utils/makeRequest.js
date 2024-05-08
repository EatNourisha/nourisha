import axios from "axios";
import configs from "../config";
import ls from "./secureStorage";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const errorData = {
      ...error?.response?.data,
    };
    return Promise.reject(errorData);
  }
);

const makeRequest = (config) => {
  const auth = ls.get(configs.authKey);

  // console.log("Auth", auth);

  const getHeaders = () => {
    if (auth?.isSignedIn && auth?.token)
      return {
        "device-id": "29a1df4646cb3417c19994a59a3e022a",
        role: "customer",
        authorization: `Bearer ${auth?.token}`,
      };

    return {
      "device-id": "29a1df4646cb3417c19994a59a3e022a",
      role: "customer",
    };
  };

  return(
  axios.request({
    baseURL: configs.baseUrl,
    headers: { ...getHeaders() },
    ...config,
  }));
};

export const get = (url) =>
  makeRequest({ url, method: "GET" }).then((r) => r.data);

export const post = (url, data) =>
  makeRequest({ url, data, method: "POST" }).then((r) => r.data);

export const put = (url, data) =>
  makeRequest({ url, data, method: "PUT" }).then((r) => r.data);

export const destroy = (url, data) =>
  makeRequest({ url, data, method: "DELETE" }).then((r) => r.data);

export const download = (url, progressCallback) =>
  makeRequest({
    url,
    method: "GET",
    onDownloadProgress(progressEvent) {
      const progress = Math.round(
        (progressEvent.loaded / (progressEvent?.total ?? 0)) * 100
      );
      progressCallback && progressCallback(progress);
    },
  }).then((r) => r.data);

export default makeRequest;

import axios from "axios";

export const axiosApi = (params) => {
  let defaultHeaders = {
    "Content-type": "application/json",

  };
  const headers = {
    ...defaultHeaders,
    ...params.headers,
  };
  return axios({
    headers,
    method: params.method,
    url: params.url,
    data: params.data,
  });
};

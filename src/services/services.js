import { axiosApi } from "../axios/axios";
import { urlRequests } from "./urls";

export const userRegistrationFunc = (data) => {
  const url = urlRequests.register;
  return axiosApi({
    method: "POST",
    url,
    data,
  });
};

export const userLoginFunc = (data) => {
  const url = urlRequests.login;
  return axiosApi({
    method: "POST",
    url,
    data,
  });
};

export const getEvents = (data) => {
  const url = `${urlRequests.events}:id/${data}`;
  return axiosApi({
    method: "GET",
    url
  });
};

export const createEvent = (data) => {
  const url = urlRequests.events;
  return axiosApi({
    method: "POST",
    url,
    data,
  });
};

export const editEvent = (data) => {
  const url = urlRequests.events;
  return axiosApi({
    method: "PATCH",
    url,
    data,
  });
};

export const removeEvent = (data) => {
  const url = urlRequests.events;
  return axiosApi({
    method: "DELETE",
    url,
    data
  });
};

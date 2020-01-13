import axios from "axios";

import { GET_CLIENTS, ADD_CLIENT, UPDATE_CLIENT, DELETE_CLIENT } from "./types";

export const getClients = () => dispatch => {
  axios
    .get("/api/clients/")
    .then(res => {
      dispatch({
        type: GET_CLIENTS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response.data);
    });
};

export const addClient = (client, method) => dispatch => {
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  axios({
    method: method,
    url: "/api/clients/",
    data: client
  })
    .then(res => {
      dispatch({
        type: ADD_CLIENT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response.data);
    });
};

export const updateClient = (client, method, id) => dispatch => {
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  axios({
    method: method,
    url: `/api/clients/${id}/`,
    data: client
  })
    .then(res => {
      dispatch({
        type: UPDATE_CLIENT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response.data);
    });
};

export const deleteClient = (method, id) => dispatch => {
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  console.log(id);
  axios({
    method: method,
    url: `/api/clients/${id}/`
  })
    .then(res => {
      dispatch({
        type: DELETE_CLIENT,
        payload: id
      });
    })
    .catch(err => {
      console.log(err.response.data);
    });
};

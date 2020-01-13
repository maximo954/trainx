import {
  GET_CLIENTS,
  ADD_CLIENT,
  UPDATE_CLIENT,
  DELETE_CLIENT
} from "../../actions/types";

const intialState = {
  clients: []
};

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: action.payload
      };
    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.payload]
      };
    case UPDATE_CLIENT:
      return {
        ...state,
        clients: state.clients.map(client =>
          client.id === action.payload.id
            ? { ...client, ...action.payload }
            : client
        )
      };
    case DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(client => client.id !== action.payload)
      };
    default:
      return state;
  }
};

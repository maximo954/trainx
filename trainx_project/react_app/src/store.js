import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./components/reducers";

const middleWare = [thunk];

const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromToLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistedStorage = loadFromToLocalStorage();

const store = createStore(
  rootReducer,
  persistedStorage,
  composeWithDevTools(applyMiddleware(...middleWare))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

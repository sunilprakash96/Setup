import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducer/root.reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducers, {}, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => store.getState());

export default store;
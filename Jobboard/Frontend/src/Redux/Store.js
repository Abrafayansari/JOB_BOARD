
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { combineReducers } from "redux";
import { Userreducer } from "./Reducer";
const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({  User: Userreducer, })
);
export const store = createStore(persistedReducer);
export const persistManager = persistStore(store);

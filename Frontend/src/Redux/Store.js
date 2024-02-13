
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { combineReducers } from "redux";
import { Userreducer, jobreducer } from "./Reducer";
const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({  User: Userreducer,Job:jobreducer })
);
export const store = createStore(persistedReducer);
export const persistManager = persistStore(store);

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist";

import AsyncStorage from '@react-native-async-storage/async-storage';


import userReducer from './reducers/userReducer';


const rootReducer = combineReducers({
  userReducer: userReducer,

});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ['profile'],  
    blacklist: ['progress', 'levelReducer', 'dataReducer'] 
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
let persistor = persistStore(store);


export { store, persistor };
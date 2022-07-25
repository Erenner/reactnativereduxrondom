
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from "./src/store/configureStore";
import { PersistGate } from "redux-persist/integration/react";

import App from './App';
import {name as appName} from './app.json';
import Loading from './src/components/Loading/Loading';


const BeeCase = () => (
    <Provider store={store}>
    <PersistGate loading={<Loading />}  persistor={persistor}>
    <App /> 
    </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => BeeCase);

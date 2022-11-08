import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './storeReducers';
import rootSaga from './saga/';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const devMode = process.env.NODE_ENV === 'development';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middleware),
  devTools: devMode
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

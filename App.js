import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Route from './src/navigation/Route';

export default function App() {
    return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Route />
         </PersistGate>
    </Provider>
  );
}

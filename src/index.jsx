import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { reducers } from './reducers'
import { ContextProvider } from './context/ContextProvider'
import App from './App.jsx'
import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
)
const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ContextProvider>
  </React.StrictMode>
)

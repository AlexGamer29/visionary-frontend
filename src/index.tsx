import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose
} from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { reducers } from './reducers'
import { ContextProvider } from './context/ContextProvider'

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(
  reducers as any,
  compose(applyMiddleware(thunk as any))
)

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ContextProvider>
  </React.StrictMode>
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

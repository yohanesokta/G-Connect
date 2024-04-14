import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterElement from './Router'
import { Provider } from 'react-redux'
import { store } from './app/store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterElement />
  </Provider>
)

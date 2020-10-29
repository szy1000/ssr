import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Redirect } from 'react-router-dom'
import Routes from "../Routes";
import { Provider } from 'react-redux'
import {getClientStore} from "../store";
import {renderRoutes} from 'react-router-config'


const store =  getClientStore()
ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Redirect from="/" to="/home" />
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

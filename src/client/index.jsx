import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from "../Routes";
import { Provider } from 'react-redux'
import getStore from "../store";

ReactDom.hydrate(
  <Provider store={getStore()}>
    <BrowserRouter>
      {
        Routes.map(item => <Route key={item.path} {...item}/>)
      }
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

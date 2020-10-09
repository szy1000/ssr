import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from "../Routes";
import { Provider } from 'react-redux'
import {getClientStore} from "../store";

const store =  getClientStore()
ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {/*<Redirect from="/" to="/home" />*/}
      {
        Routes.map(item => {
          if(item.routes) {
            return item.routes.map(v => <Route key={v.path} {...v}/>)
          }
          return <Route key={item.path} {...item}/>
        })
      }
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

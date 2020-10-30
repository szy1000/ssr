import React from 'react'
import { Route } from 'react-router-dom'

import App from './containers/app/index.jsx'
import Home from './containers/home/index.jsx'
import About from './containers/about/index.jsx'
import Login from './containers/login/index.jsx'
import NotFound from "./containers/404/index";

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/home',
        component: Home,
        exact: true,
        loadData: Home.loadData,
      },
      {
        path: '/about',
        component: About,
        exact: true,
        loadData: () => {}
      },
      {
        path: '/login',
        component: Login,
        exact: true,
        loadData: () => {}
      },
      {
        path: '/logout',
        component: Login,
        exact: true,
        loadData: () => {}
      },
    ]
  },
  {
    exact: true,
    component: NotFound,
  },
]

import React from 'react'
import { Route } from 'react-router-dom'

import Home from './containers/home/index.jsx'
import About from './containers/about/index.jsx'
import Login from './containers/login/index.jsx'

// export default (
//   <div>
//     <Route path="/" exact component={Home}></Route>
//     <Route path="/about" exact component={About}></Route>
//     <Route path="/login" exact component={Login}></Route>
//   </div>
// )



export default [
  {
    path: '/',
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
]

// import Home from "./containers/home";
import getStore from "../store";
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import Routes from "../Routes";

const express = require('express')
const app = express()
app.use(express.static('./public'))
app.use('/api', proxy('http://47.116.66.19:8081', {
  proxyReqPathResolver: function(req) {
    console.log('req====>',req)
  }
}));

// app.use(cors())

import React from 'react'
import {render} from './utils'
// import Home from './containers/home/index.jsx'
// const content = renderToString(<Home/>)

// app.get('/api/v1/getNews', function(req, res) {
//   res.send([
//     {
//       name: 'ss',
//       age: 18
//     },
//     {
//       name: 'cc',
//       age: 19
//     }
//   ])
// })


app.get('*', function(req, res) {

  const store = getStore()

  // const matchRoutesArr = matchRoutes(Routes, req.path)
  //
  // const promises = []
  //
  // matchRoutesArr.forEach((item) => {
  //   if (item.route.loadData) {
  //     promises.push(item.route.loadData(store))
  //   }
  // })


  // Promise.all(promises).then(() => {
  // res.send(render(req,store, Routes))
  // })
  res.send(render(req,store, Routes))

})



const server = app.listen(3000)

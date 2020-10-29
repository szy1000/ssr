// import Home from "./containers/home";
import proxy from 'express-http-proxy'
import {getStore} from "../store";
import { matchRoutes } from 'react-router-config'

import Routes from "../Routes";

const express = require('express')
const app = express()
app.use(express.static('./public'))
app.use('/api', proxy('http://47.116.66.19:8081', {
  proxyReqPathResolver: function(req) {
    return  '/api'  + req.url
  }
}));

// app.use(cors())

import React from 'react'
import {render} from './utils'
// import Home from './containers/home/index.jsx'
// const content = renderToString(<Home/>)

app.get('*', function(req, res) {

  const store = getStore()
  const matchRoutesArr = matchRoutes(Routes, req.path)

  const promises = []

  matchRoutesArr.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })


  Promise.all(promises).then(() => {
    const context = {}
    const html = render(req,store, Routes,context)
    // 处理404
    if(context.action === 'REPLACE') {
      res.redirect(301,context.url)
    } else if(context.NOT_FOUND) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  })
  // res.send(render(req,store, Routes))

})



const server = app.listen(3000)

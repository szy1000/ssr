// import Home from "./containers/home";
import getStore from "../store";
import { matchRoutes } from 'react-router-config'
import Routes from "../Routes";

const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.static('./public'))
// app.use(cors())

import React from 'react'
import {render} from './utils'
// import Home from './containers/home/index.jsx'
// const content = renderToString(<Home/>)

app.get('/api/v1/getNews', function(req, res) {
  res.send([
    {
      name: 'ss',
      age: 18
    },
    {
      name: 'cc',
      age: 19
    }
  ])
})


app.get('*', function(req, res) {

  const store = getStore()

  const matchRoutesArr = matchRoutes(Routes, req.path)

  const promises = []

  matchRoutesArr.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
    // const promise = new Promise((reslove, reject) => {
      // item.route.loadData(store).then(reslove).catch(reslove)
    // })
  })


  Promise.all(promises).then(() => {
    res.send(render(req,store, Routes))
  })
})



const server = app.listen(3000)

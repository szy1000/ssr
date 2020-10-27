import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter,Route } from 'react-router-dom'
// import Routes from "../Routes";

// store
import { Provider } from 'react-redux'
import getStore from "../store";

export const render = (req, store, routes) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} content={{}}>
        {
          routes.map(item => <Route key={item.path} {...item}/>)
        }
      </StaticRouter>
    </Provider>
  ))


  return `
      <html>
        <head>
          <title>hello</title>
        </head>
        <body>
          <div id="root">${content}</div>
         </body>
         <script src=${"index.js"}></script>
      </html>
    `
}




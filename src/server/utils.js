import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
// import Routes from "../Routes";

// store
import { Provider } from 'react-redux'

export const render = (req, store, routes,context) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(routes)}
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
        <!--  数据的注水-->
         <script >
            window.context =  {
              state: ${JSON.stringify(store.getState())}
            }
         </script>
         <script src=${"index.js"}></script>
      </html>
    `
}




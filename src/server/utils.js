import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter,Route } from 'react-router-dom'
// import Routes from "../Routes";

// store
import { Provider } from 'react-redux'
import Routes from "../Routes";

export const render = (req, store, routes,context) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {
          routes.map(item => {
            if(item.routes) {
              return item.routes.map(v => <Route key={v.path} {...v}/>)
            }
            return <Route key={item.path} {...item}/>
          })
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




// esModules
// import React from 'react'

// const React = require('react')
//
// const Home = () => {
//   return <div>home</div>
// }

// module.exports = {
//   default: Home
// }
// export default Home


//  同构 一段react 2次渲染  服务端 客户端

import React from 'react'
const Logout = () => (
  <div>
    <h2>Logout</h2>
    <button onClick={() => alert(11)}>Logout</button>
  </div>
)

export default Logout

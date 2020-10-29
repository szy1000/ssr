import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <Link to="/login">login</Link>
    <Link to="/about">about</Link>
    {/*<button onClick={() => alert(11)}>按钮</button>*/}
  </div>
)
export default Header

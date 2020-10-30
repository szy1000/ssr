import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Header = (props) => (
  <div>
    {console.log(props)}
    <ul>
      <li><Link to="/">home</Link></li>
      {
        props.login ? <div>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/logout">logout</Link></li>
        </div> : <li><Link to="/login">login</Link></li>
      }
    </ul>
  </div>
)


export default connect((state) => ({
  login: state.header.login
}))(Header)

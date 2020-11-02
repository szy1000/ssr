import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Header = (props) => (
  <div>
    {/*{console.log(props)}*/}
    <ul>
      <li><Link to="/">首页</Link></li>
      {
        props.login ? <div>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/logout">退出</Link></li>
        </div> : <li><Link to="/login">登录</Link></li>
      }
    </ul>
  </div>
)


export default connect((state) => ({
  login: state.header.login
}))(Header)

// export default Header

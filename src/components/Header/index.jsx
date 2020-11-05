import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginIn,loginOut} from './store/actions'

const Header = (props) => (
  <div>
    {/*{console.log(props)}*/}
    <ul>
      <li><Link to="/">首页</Link></li>
      {
        props.login ? <div>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/test">测试</Link></li>
          <li><div onClick={() => props.dispatch(loginOut())}>退出</div></li>
        </div> : <li><div onClick={() => props.dispatch(loginIn())}>登录</div></li>
      }
    </ul>
  </div>
)


export default connect((state) => ({
  login: state.header.login
}))(Header)

// export default Header

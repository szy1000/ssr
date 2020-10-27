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

import React, {Component} from 'react'
import Header from "../../components/Header.jsx";
import {connect} from 'react-redux'

import { getHomeData } from './store/actions.js'


class Home extends Component{
  componentDidMount() {
    this.props.dispatch(getHomeData('ss'))
  }

  render() {
    const {newList =[]} = this.props
    return (
      <div>
        <Header />
        {
          (Array.isArray(newList) && newList.length > 0) && newList.map(item => <div key={item.age}>{item.name}</div>)
        }
        <h2>hello {this.props.name}</h2>
        <button onClick={() => alert(11)}>按钮</button>
      </div>
    )
  }
}
//服务端加载数据
Home.loadData = (store) => store.dispatch(getHomeData('ss'))

export default connect(
  state => ({ ...state.home }),
)(Home)

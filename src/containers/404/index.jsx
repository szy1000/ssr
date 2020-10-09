import React from 'react'
import {Link} from 'react-router-dom'

class NotFound extends React.Component {
  componentWillMount() {
    const { staticContext } = this.props
    staticContext && (staticContext.NOT_FOUND = true)
  }

  render() {
    console.log('ss',this.props)
    return (
      <div>
        <h2>404</h2>
        <Link to="/">首页</Link>
      </div>
    )
  }
}

export default NotFound

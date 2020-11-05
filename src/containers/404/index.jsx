import React from 'react'
import {Link} from 'react-router-dom'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './style.css'

class NotFound extends React.Component {
  componentWillMount() {
    const { staticContext } = this.props
    staticContext && (staticContext.NOT_FOUND = true)
  }

  render() {
    useStyles(styles)
    return (
      <div className={styles.test}>
        <h2>404</h2>
        <Link to="/">首页</Link>
      </div>
    )
  }
}

export default NotFound

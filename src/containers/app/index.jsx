import React, {Fragment} from 'react'
import Header from "../../components/Header/index.jsx";
import {renderRoutes} from 'react-router-config'

class App extends React.Component {
  render() {
    const {route: {routes}} = this.props
    return (
      <Fragment>
        <Header />
        {renderRoutes(routes)}
      </Fragment>
    )
  }
}

export default App

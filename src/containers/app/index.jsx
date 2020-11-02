import React, {Fragment} from 'react'
import Header from "../../components/Header/index.jsx";
import {renderRoutes} from 'react-router-config'
// import { getHomeData } from "../home/store/actions";

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

// App.loadData = (store) => store.dispatch(getHomeData(true))


export default App

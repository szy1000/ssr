import React, {Component} from 'react'
import { getAboutListReq } from "./store/actions";
import { Redirect } from 'react-router-dom'

class About extends Component {
  render() {
    console.log('redirect')
    return (
      <Redirect from="about" to='/'/>
    )
  }
}


About.loadData = (store) => store.dispatch(getAboutListReq(true))

export default About

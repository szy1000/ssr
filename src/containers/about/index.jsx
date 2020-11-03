import React, {Component} from 'react'
import { getAboutListReq } from "./store/actions";

class About extends Component {
  render() {
    return (
      <div>
        <h2>hello About</h2>
      </div>
    )
  }
}


About.loadData = (store) => store.dispatch(getAboutListReq(true))

export default About

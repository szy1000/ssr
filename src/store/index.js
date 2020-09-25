import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from "../containers/home/store/reducers.js"

// const reducer = (state = {name: 'shen'}, action) => {
//   return state
// }

const reducer = combineReducers({
  home: homeReducer
})
const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export default getStore

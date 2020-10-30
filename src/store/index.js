import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from "../containers/home/store/reducers.js"
import {reducer as headerReducer} from "../components/Header/store/index"

// const reducer = (state = {name: 'shen'}, action) => {
//   return state
// }

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
})
const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument('http://47.116.66.19:8081/api/v1/getNews.json')))
}

// 数据的脱水
const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument('')))
}

export {getStore, getClientStore}

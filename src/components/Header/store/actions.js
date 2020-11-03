import axios from 'axios'

// const changeList = (login) => {
//   return {
//     type: 'change_header',
//     login: login
//   }
// }



export const getHeaderInfo = params => (dispatch,getState, _url) => {
  let url = ''
  if(params) {
    url = 'http://47.116.66.19:8081/api/v1/isLogin.json'
  } else {
    url = '/api/v1/isLogin.json?time'+ new Date().toDateString()
  }
  return axios.get(url).then((res) => {
    dispatch({
      type: 'change_header',
      // login: res.data.data.login
      login: true
    })
  })
}

export const loginIn = params => (dispatch,getState, _url) => {
  let url = ''
  if(params) {
    url = 'http://47.116.66.19:8081/api/v1/isLogin.json'
  } else {
    url = '/api/v1/isLogin.json?time'+ new Date().toDateString()
  }
  return axios.get(url).then((res) => {
    document.cookie="login=true"
    dispatch({
      type: 'change_header',
      login: true
    })
  })
}


export const loginOut = params => (dispatch,getState, _url) => {
  let url = ''
  if(params) {
    url = 'http://47.116.66.19:8081/api/v1/isLogin.json'
  } else {
    url = '/api/v1/isLogin.json?time'+ new Date().toDateString()
  }
  return axios.get(url).then((res) => {
    document.cookie="login=false"
    dispatch({
      type: 'change_header',
      login: false
    })
  })
}

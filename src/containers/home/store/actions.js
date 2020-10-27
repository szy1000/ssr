import axios from 'axios'

const changeList = (list) => ({
  type: 'change_home_list',
  newList:newList
})


export const getHomeData = params => (dispatch) => {
  let url = ''
  if(params) {
    url = 'http://47.116.66.19:8081/api/v1/getNews.json'
  } else {
    url = '/api/v1/getNews.json?time'+ new Date().toDateString()
  }
  //http://47.116.66.19:8081/api/v1/getNews.json
  return axios.get(url).then((res) => {
    dispatch({
      type: 'change_home_list',
      newList: res.data
    })
  })
}

import axios from 'axios'

const changeList = (list) => ({
  type: 'change_home_list',
  newList:newList
})


export const getHomeData = params => (dispatch) => {
  //http://47.116.66.19:8081/api/v1/getNews.json
  return axios.get('/api/v1/getNews.json').then((res) => {
    dispatch({
      type: 'change_home_list',
      newList: res.data
    })
  })
}

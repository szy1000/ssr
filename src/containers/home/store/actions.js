import axios from 'axios'

const changeList = (list) => ({
  type: 'change_home_list',
  newList:newList
})


export const getHomeData = params => (dispatch) => {
  return axios.get('http://localhost:3000/api/v1/getNews').then((res) => {
    dispatch({
      type: 'change_home_list',
      newList: res.data
    })
  })
}

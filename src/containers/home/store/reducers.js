const defaultState = {
  name: 'shenzhiyong',
  newList: []
}

export default (state =defaultState, action) => {
  switch (action.type) {
    case 'change_home_list':
      return {
        ...state,
        newList: action.newList || []
      }

    default:
      return state
  }
}

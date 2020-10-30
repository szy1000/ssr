const defaultState = {
  login: false,
}

export default (state =defaultState, action) => {
  switch (action.type) {
    case 'change_home_list':
      return {
        ...state,
      }

    default:
      return state
  }
}

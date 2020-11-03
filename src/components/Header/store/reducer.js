const defaultState = {
  login: false,
}

export default (state =defaultState, action) => {
  switch (action.type) {
    case 'change_header':
      return {
        ...state,
        login:action.login
      }

    default:
      return state
  }
}

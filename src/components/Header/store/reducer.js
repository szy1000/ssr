const defaultState = {
  login: true,
}

export default (state =defaultState, action) => {
  switch (action.type) {
    case 'change_header':
      return {
        ...state,
      }

    default:
      return state
  }
}

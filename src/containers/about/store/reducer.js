const defaultState = {
  aboutList: [],
}

export default (state =defaultState, action) => {
  switch (action.type) {
    case 'change_header':
      return {
        ...state,
        aboutList: action.list
      }

    default:
      return state
  }
}

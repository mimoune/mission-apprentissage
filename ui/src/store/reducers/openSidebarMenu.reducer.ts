const initialState = {
  openMenu: false,
}

function openSidebarMenuReducer(state = initialState, action: any) {
  let nextState
  switch (action.type) {
    case 'SET_OPEN_MENU':
      nextState = {
        ...state,
        openMenu: action.value,
      }
      return nextState || state
    default:
      return state
  }
}

export default openSidebarMenuReducer

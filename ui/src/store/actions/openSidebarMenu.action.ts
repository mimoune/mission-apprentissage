import Store from '../createStore'

// define Redux actions for this reducer
const openSidebarMenu = (value: any) => {
  Store.dispatch({ type: 'SET_OPEN_MENU', value })
}
// BiologicalPrescription
// export variables
export { openSidebarMenu }

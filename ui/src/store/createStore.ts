import { createStore, combineReducers } from 'redux'
import openSidebarMenuReducer from './reducers/openSidebarMenu.reducer'

const rootReducer = combineReducers({
  OPEN_SIDEBAR: openSidebarMenuReducer,
})
export default createStore(rootReducer)

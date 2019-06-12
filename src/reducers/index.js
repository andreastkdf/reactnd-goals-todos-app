import { combineReducer } from "redux"

import todos from "./todos"
import loading from "./loading"
import goals from "./goals"

export default Redux.combineReducers({
  todos,
  goals,
  loading
})

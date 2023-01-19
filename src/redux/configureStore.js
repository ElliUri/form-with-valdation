import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import todoReducer from "./todo/reducers";
import filterReducer from "./filter/reducers";

const rootReducer = combineReducers({
  todos: todoReducer,
  activeTodoFiler: filterReducer
})

export const store = createStore(rootReducer, composeWithDevTools, (thunk))
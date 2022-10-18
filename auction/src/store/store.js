import {combineReducers, legacy_createStore} from "redux"
import { applyMiddleware } from "redux"
import { reducer } from "../redux/reducer"
import thunk from "redux-thunk"


const rootReducer = combineReducers({app:reducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
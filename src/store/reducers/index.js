import { combineReducers } from "redux";
import employees from "./employees_reducer";
import notifications from './notification_reducer'

const appReducers = combineReducers({
    employees,
    notifications
})

export default appReducers;
import {GET_EMPLOYEES, GET_EMPLOYEE_BY_ID,CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE, CLEAR_CURRENT_EMPLOYEE} from '../types';


export default function employeeReducer(state={},action){
    switch(action.type){
        case GET_EMPLOYEES:
            return {...state, employees:action.payload}
        case GET_EMPLOYEE_BY_ID:
            return {...state, current:action.payload}
        case CREATE_EMPLOYEE:
            return {...state, newEmployee:action.payload, success:true}
        case UPDATE_EMPLOYEE:
            return {...state, newEmployeeData:action.payload, success:true}
        case DELETE_EMPLOYEE:
            return {...state, deleteEmployee:true}
        case CLEAR_CURRENT_EMPLOYEE:
            return {...state, current:''}
        default:
            return state
    }
}
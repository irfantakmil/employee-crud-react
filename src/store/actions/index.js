import {GET_EMPLOYEES, GET_EMPLOYEE_BY_ID,CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE, CLEAR_CURRENT_EMPLOYEE, ERROR_GLOBAL, SUCCESS_GLOBAL, CLEAR_NOTIFICATION} from '../types';

export const getEmployees = (employees) => ({
    type: GET_EMPLOYEES,
    payload: employees
})

export const getEmployeeById = (id) => ({
    type: GET_EMPLOYEE_BY_ID,
    payload: id
})

export const createEmployee = (employee) => ({
    type: CREATE_EMPLOYEE,
    payload: employee
})

export const updateEmployee = (newData) => ({
    type: UPDATE_EMPLOYEE,
    payload: newData
})

export const deleteEmployee = () => ({
    type: DELETE_EMPLOYEE,
})

export const clearCurrentEmplyee = () => ({
    type:CLEAR_CURRENT_EMPLOYEE
})

export const errorGlobal = (msg) => ({
    type: ERROR_GLOBAL,
    payload: msg
})

export const successGlobal = (msg) => ({
    type: SUCCESS_GLOBAL,
    payload: msg
})

export const clearNotification = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_NOTIFICATION
        })
    }
}
